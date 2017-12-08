import React from 'react'
import DayRange from '../../components/DayRange'
import {Form} from 'reactackle';
import {Button} from 'reactackle';
import {FormItem} from 'reactackle';
import {TextField} from 'reactackle';
import {SelectBox} from 'reactackle';

const sampleData={[
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3 - disabled', disabled: true },
]}

export default() => (<div>

  <Form>
    <FormItem>
      <TextField bordered placeholder="Bordered TextField" />
    </FormItem>
    <FormItem>
      <p>Ready?</p>
      <Button text="Create Event"/>
    </FormItem>
  </Form>

  <SelectBox
  value={this.state.value}
  options={sampleData}
  placeholder={'Choose option...'}
  onChange={this._handleChange}
  label="Customized select box"
/>

  <DayRange/>
</div>)
