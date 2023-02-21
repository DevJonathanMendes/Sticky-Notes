const { round, random } = Math;

const randomId = (): string =>
    round(Date.now() * random()).toString(36);

export default randomId;
