import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type User = {
    name?: string;
    given_name?: string;
    family_name?: string;
    middle_name?: string;
    nickname?: string;
    preferred_username?: string;
    profile?: string;
    picture?: string;
    website?: string;
    email?: string;
    email_verified?: boolean;
    gender?: string;
    birthdate?: string;
    zoneinfo?: string;
    locale?: string;
    phone_number?: string;
    phone_number_verified?: boolean;
    address?: string;
    updated_at?: string;
    sub?: string;
    [key: string]: any;
}

export type Upload = {
    id?: string;
    sub: string;
    filename: string
    mimetype: string;
    url?: string;
    preview?: string;
    size?: number;
    created_at?: string;
    updated_at?: string;
    [key: string]: any;
}

export type Music = {

    image?: string
    artist: string
    title?: string
    album?: string
    category?: string
    size?: string
    duration?: string
    url: string

}