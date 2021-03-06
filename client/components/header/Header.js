import React from 'react';

import { BurgerMenuButton } from './BurgerMenuButton';
import { useTranslation } from '../../hooks/useTranslation';

export function Header({
	children,
	hideHelp,
	rawSectionName,
	sectionName,
}) {
	const t = useTranslation();

	return <header className='rc-header'>
		<div className='rc-header__wrap'>
			<div className='rc-header__block rc-header--burger'>
				<BurgerMenuButton />
			</div>

			<span className='rc-header__block'>{rawSectionName || t(sectionName)}</span>

			{children}

			{!hideHelp && <div className='rc-header__section-help' />}
		</div>
	</header>;
}
