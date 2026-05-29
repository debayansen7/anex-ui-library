import "./tokens/index.css";
import "./themes/index.css";

// ── Basic ──────────────────────────────────────────────────────────────────
export {
  Button,
  Label,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
  Switch,
  Slider,
  SegmentedControl,
} from "./components/basic";

export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  LabelProps,
  InputProps,
  TextareaProps,
  CheckboxProps,
  RadioGroupProps,
  RadioProps,
  SelectProps,
  SwitchProps,
  SliderProps,
  SegmentedControlProps,
  SegmentedOption,
  SegmentedSize,
} from "./components/basic";

// ── Layout ─────────────────────────────────────────────────────────────────
export { Container, Stack, Grid, Divider, Sidebar } from "./components/layout";

export type {
  ContainerProps,
  ContainerMaxWidth,
  StackProps,
  StackGap,
  GridProps,
  GridCols,
  GridGap,
  DividerProps,
  SidebarProps,
  SidebarSide,
} from "./components/layout";

// ── Navigation ─────────────────────────────────────────────────────────────
export {
  Tabs, TabList, Tab, TabPanel, Breadcrumb, Pagination, Stepper,
  Navbar, NavbarBrand, NavbarNav, NavbarActions,
  SideNav, SideNavGroup, SideNavItem,
  TableOfContents,
} from "./components/navigation";

export type {
  TabsProps,
  TabListProps,
  TabProps,
  TabPanelProps,
  TabsVariant,
  BreadcrumbProps,
  BreadcrumbItem,
  PaginationProps,
  StepperProps,
  Step,
  StepperOrientation,
  NavbarProps,
  NavbarBrandProps,
  NavbarNavProps,
  NavbarActionsProps,
  SideNavProps,
  SideNavGroupProps,
  SideNavItemProps,
  TableOfContentsProps,
  TocItem,
} from "./components/navigation";

// ── Feedback ───────────────────────────────────────────────────────────────
export { Alert, Badge, Spinner, Progress, Skeleton, ToastProvider, useToast, Callout, EmptyState } from "./components/feedback";

export type {
  AlertProps,
  AlertVariant,
  BadgeProps,
  BadgeVariant,
  BadgeSize,
  SpinnerProps,
  SpinnerSize,
  ProgressProps,
  ProgressVariant,
  SkeletonProps,
  SkeletonVariant,
  ToastItem,
  ToastType,
  ToastProviderProps,
  ToastContextValue,
  CalloutProps,
  CalloutVariant,
  EmptyStateProps,
} from "./components/feedback";

// ── Overlay ────────────────────────────────────────────────────────────────
export { Modal, Drawer, Tooltip, Popover, CommandPalette } from "./components/overlay";

export type {
  ModalProps,
  ModalSize,
  DrawerProps,
  DrawerSide,
  DrawerSize,
  TooltipProps,
  TooltipSide,
  PopoverProps,
  PopoverSide,
  PopoverAlign,
  CommandPaletteProps,
  CommandItem,
} from "./components/overlay";

// ── Data Display ───────────────────────────────────────────────────────────
export {
  Avatar,
  Card, CardHeader, CardBody, CardFooter,
  Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  Accordion, AccordionItem, AccordionTrigger, AccordionPanel,
  Tag,
  Carousel,
  Banner,
  Timeline,
  CodeBlock,
  Rating,
  ImageGallery,
} from "./components/data-display";

export type {
  AvatarProps, AvatarSize, AvatarStatus,
  CardProps, CardSectionProps, CardRounded, CardShadow,
  TableProps, TableHeaderProps, TableCellProps,
  AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionPanelProps,
  TagProps, TagVariant,
  CarouselProps,
  BannerProps, BannerVariant, BannerAction,
  TimelineProps, TimelineItem, TimelineItemStatus,
  CodeBlockProps,
  RatingProps,
  RatingSize,
  ImageGalleryProps,
  GalleryImage,
  GalleryCols,
  GalleryGap,
} from "./components/data-display";

// ── Form Composites ────────────────────────────────────────────────────────
export { FormField, SearchInput, NumberInput, DatePicker, Combobox, FileUpload, OTPInput } from "./components/form";

export type {
  FormFieldProps,
  SearchInputProps,
  NumberInputProps,
  DatePickerProps,
  ComboboxProps,
  ComboboxOption,
  FileUploadProps,
  OTPInputProps,
} from "./components/form";
