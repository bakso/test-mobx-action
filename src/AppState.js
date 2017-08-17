import { observable, action } from 'mobx';

class AppState {
  @observable value = 0;
  @observable validText = '';
  
  onChange(ev) {
    this.value = ev.target.value;
    this.valid(this.value);
  }
  
  valid(value) {
    if (!/^\d+$/.test(value)) {
      this.validText = '必须是纯数字';
    } else {
      this.validText = '';
    }
  }
}

export default AppState;
