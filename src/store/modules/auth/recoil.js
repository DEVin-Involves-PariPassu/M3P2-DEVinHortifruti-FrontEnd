import { atom } from "recoil";

export const authState = atom({
    key: 'token',
    default: ''
});

export const signed = atom({
    key: 'logado',
    default: false
});

export const isAdminState = atom({
    key: 'isAdmin',
    default: ''
});