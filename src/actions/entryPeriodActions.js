import EntryPeriod from '../models/EntryPeriod';

export const createEntryPeriod = async (entryPeriod) => {
    try {
        const newEntryPeriod = await EntryPeriod.create(entryPeriod);
        return newEntryPeriod;
    } catch (err) {
        console.error(err)
    }
}

export const getEntryPeriods = async () => {
    try {
        const entryPeriods = await EntryPeriod.find();
        return entryPeriods;
    } catch (err) {
        console.log(err)
    }
}

export const updateEntryPeriod = async (filter, update) => {
    try {
        const entryPeriodUpdated = await EntryPeriod.findOneAndUpdate(filter, update);
        return entryPeriodUpdated;
    } catch (err) {
        console.error(err)
    }
}

export const deleteEntryPeriod = async (filter) => {
    try {
        const deleteEntryPeriod = EntryPeriod.findOneAndDelete(filter);
        return await deleteEntryPeriod;
    } catch (err) {
        console.error(err)
    }
}