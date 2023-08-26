# a React ScrollView component

## Installation

```bash
npm i scroll-view-react
```

## Example

```jsx
// index.jsx
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ScrollView from 'scroll-view-react'

import ProductItem from './ProductItem.jsx'

const MySection = memo(({ data = {} }) => {
  const { list = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7}] } = data

  return (
    <div className='list'>
      <ScrollView>
        {
          list.map((item) => {
            return <ProductItem key={item.id} itemData={item} itemWidth="20%" />
          })
        }
      </ScrollView>
    </div>
  )
})

MySection.propTypes = {
  data: PropTypes.object
}

export default MySection
```

```jsx
// ProductItem.jsx
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import './style.css'

const ProductItem = memo(({ itemData, itemWidth }) => {
  return (
    <div style={{
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: '0 8px',
      width: itemWidth,
      height: '200px',
      backgroundImage: 'linear-gradient(135deg, #42d392 25%, #647eff)',
      backgroundOrigin: 'content-box',
      backgroundRepeat: 'no-repeat'
    }}>
      {`ProductItem${itemData.id}`}
    </div>
  )
})

ProductItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default ProductItem
```

```css
/* style.css */
.list .control.left {
  transform: translate(calc(-50% + 8px), -50%) !important;
}

.list .control.right {
  transform: translate(calc(50% - 8px), -50%) !important;
}
```

## References

### ScrollView Component

```jsx
import ScrollView from 'scroll-view-react'
```

### Props

| Property | Description | Type |
| -------- | ----------- | ---- |
| showMask | Whether to display a masking effect when the button appears. | boolean |
