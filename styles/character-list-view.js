export default class CharacterListView {

  constructor (characterElement, newData) {
    this.characters = newData.data;
    this.characterElement = characterElement;
  }
