import fs from 'fs';
import path from 'path';
import { v4 as uuid4 } from 'uuid'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const trainersDbPath = path.join(__dirname, '..', 'trainers.json')

export const getAllTrainers = (query) => {
    let trainers = JSON.parse(fs.readFileSync(trainersDbPath, { encoding: "utf-8" }))
    if (trainers?.length <= 0) {
        return trainers
    }
    if (query?.currentlyActive) {
        trainers = trainers.filter(s => s.isCurrentlyTeaching == Boolean(query.currentlyActive))
        console.log(trainers)
    }
    if (query?.sortBy) {
        if (query.sortBy === "coursesAsc") {
            trainers = trainers.sort((a, b) => (a.coursesFinished > b.coursesFinished) ? 1 : -1)


        } else if (query.sortBy === "coursesDesc") {
          trainers = trainers.sort((a, b) => (a.coursesFinished < b.coursesFinished) ? 1 : -1)
        
        }
    }
    return trainers;

}
export const getTrainersById = (id) => {
    const trainers = getAllTrainers();
    const trainer = trainers.find(s => s.id === id);
    if (!trainer) {
        throw new Error(`Trainer with id:${id} not found`)
    }
    return trainer;

}



export const saveTrinersData = (trainers) => {
    fs.writeFileSync(trainersDbPath, JSON.stringify(trainers, null, 2))
}

export const updateTrainerInfo = (id, trainer) => {
    const trainers = getAllTrainers();
    const index = trainers.findIndex(s => s.id === id);
    if (index < 0) {
        throw new Error(`Trainer with id:${id} not found`)
    }
    trainers[index] = {
        ...trainers[index],
        ...trainer
    }
    saveTrinersData(trainers)

}

export const addTrainer = (trainer) => {
    const trainers = getAllTrainers();

    trainers.push({
        ...trainer,
        id: uuid4
    })
    saveTrinersData(trainers);
}



export const deleteTrainer = (id) => {
    const trainers = getAllTrainers();
    const filterTrainer = trainers.filter(s => s.id !== id)
    saveTrinersData(filterTrainer)
}

export const deleteAllTrainers = () => {
    const trainers = getAllTrainers();
    trainers = [];



}   