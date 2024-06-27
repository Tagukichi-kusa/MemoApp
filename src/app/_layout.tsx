// Index.tsxの外側になる特殊なファイル[ファイル名は固定]

import { Slot } from 'expo-router'
import React from 'react';

const Layout = () :JSX.Element => {
    return <Slot />

}

export default Layout
