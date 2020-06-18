import { mount } from '@vue/test-utils';
import WithWrapper from '../src';
describe('test wrapper', () => {
  it('should render correctly', () => {
    const wrapper = mount({
      components: {
        WithWrapper,
      },
      template: `
        <div>
          <with-wrapper :data1="mockData.data1" :data2="mockData.data2">
            <template #default="{ data1, data2 }">
              <span>
                {{data1}}
              </span>
              <span>
                {{data2}}
              </span>
            </template>
          </with-wrapper>
        </div>
      `,
      data() {
        return {
          mockData: {
            data1: 123,
            data2: '456',
          },
        };
      },
    });
    const spans = wrapper.findAll('span');
    expect(spans).toHaveLength(2);
    expect(spans.at(0).text()).toEqual('123');
    expect(spans.at(1).text()).toEqual('456');
  });
  it('should render correctly', () => {
    const wrapper = mount({
      components: {
        WithWrapper,
      },
      template: `
        <div>
          <with-wrapper v-bind="mockData">
            <template #default="{ data3, data4 }">
              <span>
                {{data3}}
              </span>
              <span>
                {{data4}}
              </span>
            </template>
          </with-wrapper>
        </div>
      `,
      data() {
        return {
          mockData: {
            data3: 789,
            data4: '1010',
          },
        };
      },
    });
    const spans = wrapper.findAll('span');
    expect(spans).toHaveLength(2);
    expect(spans.at(0).text()).toEqual('789');
    expect(spans.at(1).text()).toEqual('1010');
  });
});
