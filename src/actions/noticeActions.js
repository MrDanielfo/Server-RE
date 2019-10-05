import Notice from '../models/Notice';

export const createNotice = async (notice) => {
    try {
        const newNotice = await Notice.create(notice);
        return newNotice;
    } catch (err) {
        console.error(err)
    }
}

export const getNotices = async () => {
    try {
        const notices = await Notice.find().populate('author', ['name', 'lastName', 'email']);
        return notices;
    } catch (err) {
        console.log(err)
    }
}

export const updateNotice = async (filter, update) => {
    try {
        const entryNotice = await Notice.findOneAndUpdate(filter, update);
        return entryNotice;
    } catch (err) {
        console.error(err)
    }
}

export const deleteNotice = async (filter) => {
    try {
        const deleteNotice = Notice.findOneAndDelete(filter);
        return await deleteNotice;
    } catch (err) {
        console.error(err)
    }
}