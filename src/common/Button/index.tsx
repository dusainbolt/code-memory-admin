import React from 'react';
import { Button, Tooltip } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';
import { TooltipPlacement } from 'antd/lib/tooltip';
import clsx from 'clsx';
import { useAppSelector } from '../../redux/rootStore';

export interface _ButtonCommon extends BaseButtonProps {
  children?: any;
  titleTooltip?: string;
  className?: string;
  placement?: TooltipPlacement;
  href?: string;
  onClick?: any;
  actionTypeLoading?: string;
}

const ButtonCommon: React.FC<_ButtonCommon> = ({
  children,
  shape,
  actionTypeLoading,
  type = 'primary',
  className,
  placement = 'bottom',
  icon = null,
  titleTooltip,
  ...props
}) => {
  const isLoadingReducer = useAppSelector(store => store.loadingReducer);
  const loadingRequest = actionTypeLoading && isLoadingReducer[actionTypeLoading] ? true : false;

  return (
    <Tooltip overlayClassName={clsx(`${className}-tooltip`)} placement={placement} title={titleTooltip || children}>
      <Button loading={loadingRequest} type={type} shape={shape} className={clsx({ 'app-btn': true, [className]: className })} icon={icon} {...props}>
        {children}
      </Button>
    </Tooltip>
  );
};

export default ButtonCommon;
