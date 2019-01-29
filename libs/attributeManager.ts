import {AttributesManager} from 'ask-sdk';

type attributeType = {[key: string]: any;}
class MockAttributeManager implements AttributesManager {
  private request: attributeType = {}
  private session: attributeType = {}
  private persistent: attributeType = {}
  private db: attributeType = {}
  getRequestAttributes() {
    return this.request
  }
  getSessionAttributes() {
    return this.session
  }
  getPersistentAttributes() {
    return Promise.resolve(this.db)
  }
  setRequestAttributes(attribute: attributeType) {
    this.request = attribute
  }
  setSessionAttributes(attribute: attributeType) {
    this.session = attribute
  }
  setPersistentAttributes(attribute: attributeType) {
    this.persistent = attribute
  }
  savePersistentAttributes() {
    this.db = this.persistent
    return Promise.resolve()
  }
}

export default MockAttributeManager