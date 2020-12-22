import React from 'react';
import PropTypes from 'prop-types';
import {CardFolderTabs as CardFolderTabsX} from 'wix-style-react';
import tryGetNumber from 'usr/utils/tryGetNumber';

export interface CardFolderTabsProps {
    activeTabId?: string;
    maxTabWidth?: string | number;
    tabs?: {
        id: string;
        name: string;
        disabled: boolean;
        tabContent: React.ReactNode;
    }[];
    onTabChange?: (activeTabId: string) => void;
}

interface CardFolderTabsState {
    activeTabId?: string;
}

class CardFolderTabs extends React.Component<CardFolderTabsProps, CardFolderTabsState> {

    static propTypes: PropTypes.InferProps<CardFolderTabsProps> = {
        /**
         * Id of currently visible tab
         */
        activeTabId: PropTypes.string,
        /**
         * Max width of tab buttons
         */
        maxTabWidth: PropTypes.string,
        /**
         * Tabs
         */
        tabs: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            disabled: PropTypes.bool,
            tabContent: PropTypes.element,
        })),
        /**
         *
         */
        onTabChange: PropTypes.func,
    };

    static defaultProps: CardFolderTabsProps = {
        activeTabId: '1',
        maxTabWidth: '138px',
        tabs: [
            {
                id: '1',
                name: 'Tab 1',
                disabled: false,
                tabContent: <span/>
            },
            {
                id: '2',
                name: 'Tab 2',
                disabled: false,
                tabContent: <span/>
            },
        ],
        onTabChange: () => {
        },
    };


    constructor(props: CardFolderTabsProps) {
        super(props);
        this.state = {
            activeTabId: this.props.activeTabId,
        };
    }

    componentDidUpdate(prevProps: Readonly<CardFolderTabsProps>) {
        if (prevProps.activeTabId !== this.props.activeTabId) {
            this.setState({
                activeTabId: this.props.activeTabId,
            });
        }
    }

    handleTabChange = (activeTabId: string) => {
        this.setState({activeTabId});
        const {onTabChange} = this.props;
        if (onTabChange) {
            onTabChange(activeTabId);
        }
    };

    render() {
        const {activeTabId} = this.state;
        const {tabs, maxTabWidth} = this.props;
        return (
            <CardFolderTabsX
                activeId={activeTabId || ''}
                maxTabWidth={tryGetNumber(maxTabWidth)}
                onTabChange={this.handleTabChange}
            >
                {tabs?.map(tab => {
                    return (
                        <CardFolderTabsX.Tab
                            key={tab.id}
                            id={tab.id}
                            name={tab.name}
                            disabled={tab.disabled}
                        >
                            {tab.tabContent}
                        </CardFolderTabsX.Tab>
                    )
                })}
            </CardFolderTabsX>
        );
    }
}

export default CardFolderTabs;
