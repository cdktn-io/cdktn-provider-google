/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface DataGoogleContainerClusterAddonsConfigCloudrunConfig {
}

export function dataGoogleContainerClusterAddonsConfigCloudrunConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigCloudrunConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigCloudrunConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigCloudrunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigCloudrunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // load_balancer_type - computed: true, optional: false, required: false
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
}

export class DataGoogleContainerClusterAddonsConfigCloudrunConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigCloudrunConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigCloudrunConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigConfigConnectorConfig {
}

export function dataGoogleContainerClusterAddonsConfigConfigConnectorConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigConfigConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigConfigConnectorConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigConfigConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigConfigConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigConfigConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigConfigConnectorConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigConfigConnectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigDnsCacheConfig {
}

export function dataGoogleContainerClusterAddonsConfigDnsCacheConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigDnsCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigDnsCacheConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigDnsCacheConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigDnsCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigDnsCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigDnsCacheConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigDnsCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig {
}

export function dataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig {
}

export function dataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig {
}

export function dataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfig {
}

export function dataGoogleContainerClusterAddonsConfigGkeBackupAgentConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigGkeBackupAgentConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscaling {
}

export function dataGoogleContainerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct?: DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigHorizontalPodAutoscalingToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscalingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference {
    return new DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigHttpLoadBalancing {
}

export function dataGoogleContainerClusterAddonsConfigHttpLoadBalancingToTerraform(struct?: DataGoogleContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigHttpLoadBalancingToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigHttpLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigHttpLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigHttpLoadBalancingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference {
    return new DataGoogleContainerClusterAddonsConfigHttpLoadBalancingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfig {
}

export function dataGoogleContainerClusterAddonsConfigLustreCsiDriverConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigLustreCsiDriverConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_multi_nic - computed: true, optional: false, required: false
  public get disableMultiNic() {
    return this.getBooleanAttribute('disable_multi_nic');
  }

  // enable_legacy_lustre_port - computed: true, optional: false, required: false
  public get enableLegacyLustrePort() {
    return this.getBooleanAttribute('enable_legacy_lustre_port');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigNetworkPolicyConfig {
}

export function dataGoogleContainerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigNetworkPolicyConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigNetworkPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigNetworkPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigNetworkPolicyConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigNetworkPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig {
}

export function dataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigPodSnapshotConfig {
}

export function dataGoogleContainerClusterAddonsConfigPodSnapshotConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigPodSnapshotConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigPodSnapshotConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigPodSnapshotConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigPodSnapshotConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigPodSnapshotConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigPodSnapshotConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigPodSnapshotConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigPodSnapshotConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigPodSnapshotConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig {
}

export function dataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig {
}

export function dataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigRayOperatorConfig {
}

export function dataGoogleContainerClusterAddonsConfigRayOperatorConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigRayOperatorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigRayOperatorConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigRayOperatorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigRayOperatorConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigRayOperatorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigRayOperatorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ray_cluster_logging_config - computed: true, optional: false, required: false
  private _rayClusterLoggingConfig = new DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigList(this, "ray_cluster_logging_config", false);
  public get rayClusterLoggingConfig() {
    return this._rayClusterLoggingConfig;
  }

  // ray_cluster_monitoring_config - computed: true, optional: false, required: false
  private _rayClusterMonitoringConfig = new DataGoogleContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigList(this, "ray_cluster_monitoring_config", false);
  public get rayClusterMonitoringConfig() {
    return this._rayClusterMonitoringConfig;
  }
}

export class DataGoogleContainerClusterAddonsConfigRayOperatorConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigRayOperatorConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigRayOperatorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigSliceControllerConfig {
}

export function dataGoogleContainerClusterAddonsConfigSliceControllerConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigSliceControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigSliceControllerConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigSliceControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigSliceControllerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigSliceControllerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigSliceControllerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigSliceControllerConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigSliceControllerConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigSliceControllerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfigStatefulHaConfig {
}

export function dataGoogleContainerClusterAddonsConfigStatefulHaConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfigStatefulHaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigStatefulHaConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfigStatefulHaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigStatefulHaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfigStatefulHaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfigStatefulHaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterAddonsConfigStatefulHaConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigStatefulHaConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigStatefulHaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAddonsConfig {
}

export function dataGoogleContainerClusterAddonsConfigToTerraform(struct?: DataGoogleContainerClusterAddonsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAddonsConfigToHclTerraform(struct?: DataGoogleContainerClusterAddonsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAddonsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudrun_config - computed: true, optional: false, required: false
  private _cloudrunConfig = new DataGoogleContainerClusterAddonsConfigCloudrunConfigList(this, "cloudrun_config", false);
  public get cloudrunConfig() {
    return this._cloudrunConfig;
  }

  // config_connector_config - computed: true, optional: false, required: false
  private _configConnectorConfig = new DataGoogleContainerClusterAddonsConfigConfigConnectorConfigList(this, "config_connector_config", false);
  public get configConnectorConfig() {
    return this._configConnectorConfig;
  }

  // dns_cache_config - computed: true, optional: false, required: false
  private _dnsCacheConfig = new DataGoogleContainerClusterAddonsConfigDnsCacheConfigList(this, "dns_cache_config", false);
  public get dnsCacheConfig() {
    return this._dnsCacheConfig;
  }

  // gce_persistent_disk_csi_driver_config - computed: true, optional: false, required: false
  private _gcePersistentDiskCsiDriverConfig = new DataGoogleContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigList(this, "gce_persistent_disk_csi_driver_config", false);
  public get gcePersistentDiskCsiDriverConfig() {
    return this._gcePersistentDiskCsiDriverConfig;
  }

  // gcp_filestore_csi_driver_config - computed: true, optional: false, required: false
  private _gcpFilestoreCsiDriverConfig = new DataGoogleContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigList(this, "gcp_filestore_csi_driver_config", false);
  public get gcpFilestoreCsiDriverConfig() {
    return this._gcpFilestoreCsiDriverConfig;
  }

  // gcs_fuse_csi_driver_config - computed: true, optional: false, required: false
  private _gcsFuseCsiDriverConfig = new DataGoogleContainerClusterAddonsConfigGcsFuseCsiDriverConfigList(this, "gcs_fuse_csi_driver_config", false);
  public get gcsFuseCsiDriverConfig() {
    return this._gcsFuseCsiDriverConfig;
  }

  // gke_backup_agent_config - computed: true, optional: false, required: false
  private _gkeBackupAgentConfig = new DataGoogleContainerClusterAddonsConfigGkeBackupAgentConfigList(this, "gke_backup_agent_config", false);
  public get gkeBackupAgentConfig() {
    return this._gkeBackupAgentConfig;
  }

  // horizontal_pod_autoscaling - computed: true, optional: false, required: false
  private _horizontalPodAutoscaling = new DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscalingList(this, "horizontal_pod_autoscaling", false);
  public get horizontalPodAutoscaling() {
    return this._horizontalPodAutoscaling;
  }

  // http_load_balancing - computed: true, optional: false, required: false
  private _httpLoadBalancing = new DataGoogleContainerClusterAddonsConfigHttpLoadBalancingList(this, "http_load_balancing", false);
  public get httpLoadBalancing() {
    return this._httpLoadBalancing;
  }

  // lustre_csi_driver_config - computed: true, optional: false, required: false
  private _lustreCsiDriverConfig = new DataGoogleContainerClusterAddonsConfigLustreCsiDriverConfigList(this, "lustre_csi_driver_config", false);
  public get lustreCsiDriverConfig() {
    return this._lustreCsiDriverConfig;
  }

  // network_policy_config - computed: true, optional: false, required: false
  private _networkPolicyConfig = new DataGoogleContainerClusterAddonsConfigNetworkPolicyConfigList(this, "network_policy_config", false);
  public get networkPolicyConfig() {
    return this._networkPolicyConfig;
  }

  // parallelstore_csi_driver_config - computed: true, optional: false, required: false
  private _parallelstoreCsiDriverConfig = new DataGoogleContainerClusterAddonsConfigParallelstoreCsiDriverConfigList(this, "parallelstore_csi_driver_config", false);
  public get parallelstoreCsiDriverConfig() {
    return this._parallelstoreCsiDriverConfig;
  }

  // pod_snapshot_config - computed: true, optional: false, required: false
  private _podSnapshotConfig = new DataGoogleContainerClusterAddonsConfigPodSnapshotConfigList(this, "pod_snapshot_config", false);
  public get podSnapshotConfig() {
    return this._podSnapshotConfig;
  }

  // ray_operator_config - computed: true, optional: false, required: false
  private _rayOperatorConfig = new DataGoogleContainerClusterAddonsConfigRayOperatorConfigList(this, "ray_operator_config", false);
  public get rayOperatorConfig() {
    return this._rayOperatorConfig;
  }

  // slice_controller_config - computed: true, optional: false, required: false
  private _sliceControllerConfig = new DataGoogleContainerClusterAddonsConfigSliceControllerConfigList(this, "slice_controller_config", false);
  public get sliceControllerConfig() {
    return this._sliceControllerConfig;
  }

  // stateful_ha_config - computed: true, optional: false, required: false
  private _statefulHaConfig = new DataGoogleContainerClusterAddonsConfigStatefulHaConfigList(this, "stateful_ha_config", false);
  public get statefulHaConfig() {
    return this._statefulHaConfig;
  }
}

export class DataGoogleContainerClusterAddonsConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAddonsConfigOutputReference {
    return new DataGoogleContainerClusterAddonsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAnonymousAuthenticationConfig {
}

export function dataGoogleContainerClusterAnonymousAuthenticationConfigToTerraform(struct?: DataGoogleContainerClusterAnonymousAuthenticationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAnonymousAuthenticationConfigToHclTerraform(struct?: DataGoogleContainerClusterAnonymousAuthenticationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAnonymousAuthenticationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAnonymousAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAnonymousAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataGoogleContainerClusterAnonymousAuthenticationConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAnonymousAuthenticationConfigOutputReference {
    return new DataGoogleContainerClusterAnonymousAuthenticationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAuthenticatorGroupsConfig {
}

export function dataGoogleContainerClusterAuthenticatorGroupsConfigToTerraform(struct?: DataGoogleContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAuthenticatorGroupsConfigToHclTerraform(struct?: DataGoogleContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAuthenticatorGroupsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAuthenticatorGroupsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAuthenticatorGroupsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group - computed: true, optional: false, required: false
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
}

export class DataGoogleContainerClusterAuthenticatorGroupsConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAuthenticatorGroupsConfigOutputReference {
    return new DataGoogleContainerClusterAuthenticatorGroupsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterAutopilotClusterPolicyConfig {
}

export function dataGoogleContainerClusterAutopilotClusterPolicyConfigToTerraform(struct?: DataGoogleContainerClusterAutopilotClusterPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterAutopilotClusterPolicyConfigToHclTerraform(struct?: DataGoogleContainerClusterAutopilotClusterPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterAutopilotClusterPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterAutopilotClusterPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterAutopilotClusterPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no_standard_node_pools - computed: true, optional: false, required: false
  public get noStandardNodePools() {
    return this.getBooleanAttribute('no_standard_node_pools');
  }

  // no_system_impersonation - computed: true, optional: false, required: false
  public get noSystemImpersonation() {
    return this.getBooleanAttribute('no_system_impersonation');
  }

  // no_system_mutation - computed: true, optional: false, required: false
  public get noSystemMutation() {
    return this.getBooleanAttribute('no_system_mutation');
  }

  // no_unsafe_webhooks - computed: true, optional: false, required: false
  public get noUnsafeWebhooks() {
    return this.getBooleanAttribute('no_unsafe_webhooks');
  }
}

export class DataGoogleContainerClusterAutopilotClusterPolicyConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterAutopilotClusterPolicyConfigOutputReference {
    return new DataGoogleContainerClusterAutopilotClusterPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterBinaryAuthorization {
}

export function dataGoogleContainerClusterBinaryAuthorizationToTerraform(struct?: DataGoogleContainerClusterBinaryAuthorization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterBinaryAuthorizationToHclTerraform(struct?: DataGoogleContainerClusterBinaryAuthorization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterBinaryAuthorizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // evaluation_mode - computed: true, optional: false, required: false
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
}

export class DataGoogleContainerClusterBinaryAuthorizationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterBinaryAuthorizationOutputReference {
    return new DataGoogleContainerClusterBinaryAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions {
}

export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_upgrade_start_time - computed: true, optional: false, required: false
  public get autoUpgradeStartTime() {
    return this.getStringAttribute('auto_upgrade_start_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement {
}

export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_repair - computed: true, optional: false, required: false
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }

  // auto_upgrade - computed: true, optional: false, required: false
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }

  // upgrade_options - computed: true, optional: false, required: false
  private _upgradeOptions = new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList(this, "upgrade_options", false);
  public get upgradeOptions() {
    return this._upgradeOptions;
  }
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig {
}

export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_integrity_monitoring - computed: true, optional: false, required: false
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: false
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
}

export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_node_count - computed: true, optional: false, required: false
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }

  // batch_percentage - computed: true, optional: false, required: false
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }

  // batch_soak_duration - computed: true, optional: false, required: false
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings {
}

export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_pool_soak_duration - computed: true, optional: false, required: false
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }

  // standard_rollout_policy - computed: true, optional: false, required: false
  private _standardRolloutPolicy = new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList(this, "standard_rollout_policy", false);
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings {
}

export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blue_green_settings - computed: true, optional: false, required: false
  private _blueGreenSettings = new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsList(this, "blue_green_settings", false);
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults {
}

export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_disk_kms_key - computed: true, optional: false, required: false
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // management - computed: true, optional: false, required: false
  private _management = new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementList(this, "management", false);
  public get management() {
    return this._management;
  }

  // min_cpu_platform - computed: true, optional: false, required: false
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // shielded_instance_config - computed: true, optional: false, required: false
  private _shieldedInstanceConfig = new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigList(this, "shielded_instance_config", false);
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }

  // upgrade_settings - computed: true, optional: false, required: false
  private _upgradeSettings = new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsList(this, "upgrade_settings", false);
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
}

export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscalingResourceLimits {
}

export function dataGoogleContainerClusterClusterAutoscalingResourceLimitsToTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingResourceLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingResourceLimitsToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscalingResourceLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscalingResourceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscalingResourceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataGoogleContainerClusterClusterAutoscalingResourceLimitsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterClusterAutoscaling {
}

export function dataGoogleContainerClusterClusterAutoscalingToTerraform(struct?: DataGoogleContainerClusterClusterAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterClusterAutoscalingToHclTerraform(struct?: DataGoogleContainerClusterClusterAutoscaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterClusterAutoscalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterClusterAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterClusterAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_provisioning_defaults - computed: true, optional: false, required: false
  private _autoProvisioningDefaults = new DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaultsList(this, "auto_provisioning_defaults", false);
  public get autoProvisioningDefaults() {
    return this._autoProvisioningDefaults;
  }

  // auto_provisioning_locations - computed: true, optional: false, required: false
  public get autoProvisioningLocations() {
    return this.getListAttribute('auto_provisioning_locations');
  }

  // autoscaling_profile - computed: true, optional: false, required: false
  public get autoscalingProfile() {
    return this.getStringAttribute('autoscaling_profile');
  }

  // default_compute_class_enabled - computed: true, optional: false, required: false
  public get defaultComputeClassEnabled() {
    return this.getBooleanAttribute('default_compute_class_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // resource_limits - computed: true, optional: false, required: false
  private _resourceLimits = new DataGoogleContainerClusterClusterAutoscalingResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
}

export class DataGoogleContainerClusterClusterAutoscalingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterClusterAutoscalingOutputReference {
    return new DataGoogleContainerClusterClusterAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterConfidentialNodes {
}

export function dataGoogleContainerClusterConfidentialNodesToTerraform(struct?: DataGoogleContainerClusterConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterConfidentialNodesToHclTerraform(struct?: DataGoogleContainerClusterConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterConfidentialNodesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidential_instance_type - computed: true, optional: false, required: false
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterConfidentialNodesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterConfidentialNodesOutputReference {
    return new DataGoogleContainerClusterConfidentialNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig {
}

export function dataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigToTerraform(struct?: DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigToHclTerraform(struct?: DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_external_traffic - computed: true, optional: false, required: false
  public get allowExternalTraffic() {
    return this.getBooleanAttribute('allow_external_traffic');
  }

  // enable_k8s_certs_via_dns - computed: true, optional: false, required: false
  public get enableK8SCertsViaDns() {
    return this.getBooleanAttribute('enable_k8s_certs_via_dns');
  }

  // enable_k8s_tokens_via_dns - computed: true, optional: false, required: false
  public get enableK8STokensViaDns() {
    return this.getBooleanAttribute('enable_k8s_tokens_via_dns');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference {
    return new DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig {
}

export function dataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigToTerraform(struct?: DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigToHclTerraform(struct?: DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference {
    return new DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterControlPlaneEndpointsConfig {
}

export function dataGoogleContainerClusterControlPlaneEndpointsConfigToTerraform(struct?: DataGoogleContainerClusterControlPlaneEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterControlPlaneEndpointsConfigToHclTerraform(struct?: DataGoogleContainerClusterControlPlaneEndpointsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterControlPlaneEndpointsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterControlPlaneEndpointsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterControlPlaneEndpointsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_endpoint_config - computed: true, optional: false, required: false
  private _dnsEndpointConfig = new DataGoogleContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigList(this, "dns_endpoint_config", false);
  public get dnsEndpointConfig() {
    return this._dnsEndpointConfig;
  }

  // ip_endpoints_config - computed: true, optional: false, required: false
  private _ipEndpointsConfig = new DataGoogleContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigList(this, "ip_endpoints_config", false);
  public get ipEndpointsConfig() {
    return this._ipEndpointsConfig;
  }
}

export class DataGoogleContainerClusterControlPlaneEndpointsConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterControlPlaneEndpointsConfigOutputReference {
    return new DataGoogleContainerClusterControlPlaneEndpointsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterCostManagementConfig {
}

export function dataGoogleContainerClusterCostManagementConfigToTerraform(struct?: DataGoogleContainerClusterCostManagementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterCostManagementConfigToHclTerraform(struct?: DataGoogleContainerClusterCostManagementConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterCostManagementConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterCostManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterCostManagementConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterCostManagementConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterCostManagementConfigOutputReference {
    return new DataGoogleContainerClusterCostManagementConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterDatabaseEncryption {
}

export function dataGoogleContainerClusterDatabaseEncryptionToTerraform(struct?: DataGoogleContainerClusterDatabaseEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterDatabaseEncryptionToHclTerraform(struct?: DataGoogleContainerClusterDatabaseEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterDatabaseEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataGoogleContainerClusterDatabaseEncryptionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterDatabaseEncryptionOutputReference {
    return new DataGoogleContainerClusterDatabaseEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterDefaultSnatStatus {
}

export function dataGoogleContainerClusterDefaultSnatStatusToTerraform(struct?: DataGoogleContainerClusterDefaultSnatStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterDefaultSnatStatusToHclTerraform(struct?: DataGoogleContainerClusterDefaultSnatStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterDefaultSnatStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterDefaultSnatStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterDefaultSnatStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}

export class DataGoogleContainerClusterDefaultSnatStatusList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterDefaultSnatStatusOutputReference {
    return new DataGoogleContainerClusterDefaultSnatStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterDnsConfig {
}

export function dataGoogleContainerClusterDnsConfigToTerraform(struct?: DataGoogleContainerClusterDnsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterDnsConfigToHclTerraform(struct?: DataGoogleContainerClusterDnsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterDnsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additive_vpc_scope_dns_domain - computed: true, optional: false, required: false
  public get additiveVpcScopeDnsDomain() {
    return this.getStringAttribute('additive_vpc_scope_dns_domain');
  }

  // cluster_dns - computed: true, optional: false, required: false
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }

  // cluster_dns_domain - computed: true, optional: false, required: false
  public get clusterDnsDomain() {
    return this.getStringAttribute('cluster_dns_domain');
  }

  // cluster_dns_scope - computed: true, optional: false, required: false
  public get clusterDnsScope() {
    return this.getStringAttribute('cluster_dns_scope');
  }
}

export class DataGoogleContainerClusterDnsConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterDnsConfigOutputReference {
    return new DataGoogleContainerClusterDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterEnableK8SBetaApis {
}

export function dataGoogleContainerClusterEnableK8SBetaApisToTerraform(struct?: DataGoogleContainerClusterEnableK8SBetaApis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterEnableK8SBetaApisToHclTerraform(struct?: DataGoogleContainerClusterEnableK8SBetaApis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterEnableK8SBetaApisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterEnableK8SBetaApis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterEnableK8SBetaApis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_apis - computed: true, optional: false, required: false
  public get enabledApis() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_apis'));
  }
}

export class DataGoogleContainerClusterEnableK8SBetaApisList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterEnableK8SBetaApisOutputReference {
    return new DataGoogleContainerClusterEnableK8SBetaApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterEnterpriseConfig {
}

export function dataGoogleContainerClusterEnterpriseConfigToTerraform(struct?: DataGoogleContainerClusterEnterpriseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterEnterpriseConfigToHclTerraform(struct?: DataGoogleContainerClusterEnterpriseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterEnterpriseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterEnterpriseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_tier - computed: true, optional: false, required: false
  public get clusterTier() {
    return this.getStringAttribute('cluster_tier');
  }

  // desired_tier - computed: true, optional: false, required: false
  public get desiredTier() {
    return this.getStringAttribute('desired_tier');
  }
}

export class DataGoogleContainerClusterEnterpriseConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterEnterpriseConfigOutputReference {
    return new DataGoogleContainerClusterEnterpriseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterFleet {
}

export function dataGoogleContainerClusterFleetToTerraform(struct?: DataGoogleContainerClusterFleet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterFleetToHclTerraform(struct?: DataGoogleContainerClusterFleet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterFleetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }

  // membership_location - computed: true, optional: false, required: false
  public get membershipLocation() {
    return this.getStringAttribute('membership_location');
  }

  // membership_type - computed: true, optional: false, required: false
  public get membershipType() {
    return this.getStringAttribute('membership_type');
  }

  // pre_registered - computed: true, optional: false, required: false
  public get preRegistered() {
    return this.getBooleanAttribute('pre_registered');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class DataGoogleContainerClusterFleetList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterFleetOutputReference {
    return new DataGoogleContainerClusterFleetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterGatewayApiConfig {
}

export function dataGoogleContainerClusterGatewayApiConfigToTerraform(struct?: DataGoogleContainerClusterGatewayApiConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterGatewayApiConfigToHclTerraform(struct?: DataGoogleContainerClusterGatewayApiConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterGatewayApiConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterGatewayApiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterGatewayApiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }
}

export class DataGoogleContainerClusterGatewayApiConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterGatewayApiConfigOutputReference {
    return new DataGoogleContainerClusterGatewayApiConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterGkeAutoUpgradeConfig {
}

export function dataGoogleContainerClusterGkeAutoUpgradeConfigToTerraform(struct?: DataGoogleContainerClusterGkeAutoUpgradeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterGkeAutoUpgradeConfigToHclTerraform(struct?: DataGoogleContainerClusterGkeAutoUpgradeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterGkeAutoUpgradeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterGkeAutoUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterGkeAutoUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // patch_mode - computed: true, optional: false, required: false
  public get patchMode() {
    return this.getStringAttribute('patch_mode');
  }
}

export class DataGoogleContainerClusterGkeAutoUpgradeConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterGkeAutoUpgradeConfigOutputReference {
    return new DataGoogleContainerClusterGkeAutoUpgradeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterIdentityServiceConfig {
}

export function dataGoogleContainerClusterIdentityServiceConfigToTerraform(struct?: DataGoogleContainerClusterIdentityServiceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterIdentityServiceConfigToHclTerraform(struct?: DataGoogleContainerClusterIdentityServiceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterIdentityServiceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterIdentityServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterIdentityServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterIdentityServiceConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterIdentityServiceConfigOutputReference {
    return new DataGoogleContainerClusterIdentityServiceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig {
}

export function dataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigToTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigToHclTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pod_ipv4_range_names - computed: true, optional: false, required: false
  public get podIpv4RangeNames() {
    return this.getListAttribute('pod_ipv4_range_names');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
}

export class DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigOutputReference {
    return new DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig {
}

export function dataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigToHclTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pod_range_names - computed: true, optional: false, required: false
  public get podRangeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('pod_range_names'));
  }
}

export class DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference {
    return new DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfig {
}

export function dataGoogleContainerClusterIpAllocationPolicyAutoIpamConfigToTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterIpAllocationPolicyAutoIpamConfigToHclTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfigOutputReference {
    return new DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfig {
}

export function dataGoogleContainerClusterIpAllocationPolicyNetworkTierConfigToTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterIpAllocationPolicyNetworkTierConfigToHclTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_tier - computed: true, optional: false, required: false
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
}

export class DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfigOutputReference {
    return new DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig {
}

export function dataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigToHclTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}

export class DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference {
    return new DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterIpAllocationPolicy {
}

export function dataGoogleContainerClusterIpAllocationPolicyToTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterIpAllocationPolicyToHclTerraform(struct?: DataGoogleContainerClusterIpAllocationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterIpAllocationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterIpAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterIpAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_ip_ranges_config - computed: true, optional: false, required: false
  private _additionalIpRangesConfig = new DataGoogleContainerClusterIpAllocationPolicyAdditionalIpRangesConfigList(this, "additional_ip_ranges_config", false);
  public get additionalIpRangesConfig() {
    return this._additionalIpRangesConfig;
  }

  // additional_pod_ranges_config - computed: true, optional: false, required: false
  private _additionalPodRangesConfig = new DataGoogleContainerClusterIpAllocationPolicyAdditionalPodRangesConfigList(this, "additional_pod_ranges_config", false);
  public get additionalPodRangesConfig() {
    return this._additionalPodRangesConfig;
  }

  // auto_ipam_config - computed: true, optional: false, required: false
  private _autoIpamConfig = new DataGoogleContainerClusterIpAllocationPolicyAutoIpamConfigList(this, "auto_ipam_config", false);
  public get autoIpamConfig() {
    return this._autoIpamConfig;
  }

  // cluster_ipv4_cidr_block - computed: true, optional: false, required: false
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }

  // cluster_secondary_range_name - computed: true, optional: false, required: false
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }

  // network_tier_config - computed: true, optional: false, required: false
  private _networkTierConfig = new DataGoogleContainerClusterIpAllocationPolicyNetworkTierConfigList(this, "network_tier_config", false);
  public get networkTierConfig() {
    return this._networkTierConfig;
  }

  // pod_cidr_overprovision_config - computed: true, optional: false, required: false
  private _podCidrOverprovisionConfig = new DataGoogleContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigList(this, "pod_cidr_overprovision_config", false);
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }

  // services_ipv4_cidr_block - computed: true, optional: false, required: false
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }

  // services_secondary_range_name - computed: true, optional: false, required: false
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }

  // stack_type - computed: true, optional: false, required: false
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
}

export class DataGoogleContainerClusterIpAllocationPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterIpAllocationPolicyOutputReference {
    return new DataGoogleContainerClusterIpAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterLoggingConfig {
}

export function dataGoogleContainerClusterLoggingConfigToTerraform(struct?: DataGoogleContainerClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterLoggingConfigToHclTerraform(struct?: DataGoogleContainerClusterLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_components - computed: true, optional: false, required: false
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
}

export class DataGoogleContainerClusterLoggingConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterLoggingConfigOutputReference {
    return new DataGoogleContainerClusterLoggingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow {
}

export function dataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowToHclTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference {
    return new DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMaintenancePolicyDisruptionBudget {
}

export function dataGoogleContainerClusterMaintenancePolicyDisruptionBudgetToTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyDisruptionBudget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMaintenancePolicyDisruptionBudgetToHclTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyDisruptionBudget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMaintenancePolicyDisruptionBudgetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMaintenancePolicyDisruptionBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMaintenancePolicyDisruptionBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_disruption_time - computed: true, optional: false, required: false
  public get lastDisruptionTime() {
    return this.getStringAttribute('last_disruption_time');
  }

  // last_minor_version_disruption_time - computed: true, optional: false, required: false
  public get lastMinorVersionDisruptionTime() {
    return this.getStringAttribute('last_minor_version_disruption_time');
  }

  // minor_version_disruption_interval - computed: true, optional: false, required: false
  public get minorVersionDisruptionInterval() {
    return this.getStringAttribute('minor_version_disruption_interval');
  }

  // patch_version_disruption_interval - computed: true, optional: false, required: false
  public get patchVersionDisruptionInterval() {
    return this.getStringAttribute('patch_version_disruption_interval');
  }
}

export class DataGoogleContainerClusterMaintenancePolicyDisruptionBudgetList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMaintenancePolicyDisruptionBudgetOutputReference {
    return new DataGoogleContainerClusterMaintenancePolicyDisruptionBudgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions {
}

export function dataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToHclTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time_behavior - computed: true, optional: false, required: false
  public get endTimeBehavior() {
    return this.getStringAttribute('end_time_behavior');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference {
    return new DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusion {
}

export function dataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionToTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionToHclTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // exclusion_name - computed: true, optional: false, required: false
  public get exclusionName() {
    return this.getStringAttribute('exclusion_name');
  }

  // exclusion_options - computed: true, optional: false, required: false
  private _exclusionOptions = new DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsList(this, "exclusion_options", false);
  public get exclusionOptions() {
    return this._exclusionOptions;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference {
    return new DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMaintenancePolicyRecurringWindow {
}

export function dataGoogleContainerClusterMaintenancePolicyRecurringWindowToTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMaintenancePolicyRecurringWindowToHclTerraform(struct?: DataGoogleContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMaintenancePolicyRecurringWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMaintenancePolicyRecurringWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // recurrence - computed: true, optional: false, required: false
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataGoogleContainerClusterMaintenancePolicyRecurringWindowList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference {
    return new DataGoogleContainerClusterMaintenancePolicyRecurringWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMaintenancePolicy {
}

export function dataGoogleContainerClusterMaintenancePolicyToTerraform(struct?: DataGoogleContainerClusterMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMaintenancePolicyToHclTerraform(struct?: DataGoogleContainerClusterMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_maintenance_window - computed: true, optional: false, required: false
  private _dailyMaintenanceWindow = new DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindowList(this, "daily_maintenance_window", false);
  public get dailyMaintenanceWindow() {
    return this._dailyMaintenanceWindow;
  }

  // disruption_budget - computed: true, optional: false, required: false
  private _disruptionBudget = new DataGoogleContainerClusterMaintenancePolicyDisruptionBudgetList(this, "disruption_budget", false);
  public get disruptionBudget() {
    return this._disruptionBudget;
  }

  // maintenance_exclusion - computed: true, optional: false, required: false
  private _maintenanceExclusion = new DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusionList(this, "maintenance_exclusion", true);
  public get maintenanceExclusion() {
    return this._maintenanceExclusion;
  }

  // recurring_window - computed: true, optional: false, required: false
  private _recurringWindow = new DataGoogleContainerClusterMaintenancePolicyRecurringWindowList(this, "recurring_window", false);
  public get recurringWindow() {
    return this._recurringWindow;
  }
}

export class DataGoogleContainerClusterMaintenancePolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMaintenancePolicyOutputReference {
    return new DataGoogleContainerClusterMaintenancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMasterAuthClientCertificateConfig {
}

export function dataGoogleContainerClusterMasterAuthClientCertificateConfigToTerraform(struct?: DataGoogleContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMasterAuthClientCertificateConfigToHclTerraform(struct?: DataGoogleContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMasterAuthClientCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMasterAuthClientCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMasterAuthClientCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issue_client_certificate - computed: true, optional: false, required: false
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }
}

export class DataGoogleContainerClusterMasterAuthClientCertificateConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMasterAuthClientCertificateConfigOutputReference {
    return new DataGoogleContainerClusterMasterAuthClientCertificateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMasterAuth {
}

export function dataGoogleContainerClusterMasterAuthToTerraform(struct?: DataGoogleContainerClusterMasterAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMasterAuthToHclTerraform(struct?: DataGoogleContainerClusterMasterAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMasterAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMasterAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMasterAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_certificate_config - computed: true, optional: false, required: false
  private _clientCertificateConfig = new DataGoogleContainerClusterMasterAuthClientCertificateConfigList(this, "client_certificate_config", false);
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }
}

export class DataGoogleContainerClusterMasterAuthList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMasterAuthOutputReference {
    return new DataGoogleContainerClusterMasterAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks {
}

export function dataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksToHclTerraform(struct?: DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference {
    return new DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMasterAuthorizedNetworksConfig {
}

export function dataGoogleContainerClusterMasterAuthorizedNetworksConfigToTerraform(struct?: DataGoogleContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMasterAuthorizedNetworksConfigToHclTerraform(struct?: DataGoogleContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_blocks - computed: true, optional: false, required: false
  private _cidrBlocks = new DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList(this, "cidr_blocks", true);
  public get cidrBlocks() {
    return this._cidrBlocks;
  }

  // gcp_public_cidrs_access_enabled - computed: true, optional: false, required: false
  public get gcpPublicCidrsAccessEnabled() {
    return this.getBooleanAttribute('gcp_public_cidrs_access_enabled');
  }

  // private_endpoint_enforcement_enabled - computed: true, optional: false, required: false
  public get privateEndpointEnforcementEnabled() {
    return this.getBooleanAttribute('private_endpoint_enforcement_enabled');
  }
}

export class DataGoogleContainerClusterMasterAuthorizedNetworksConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference {
    return new DataGoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMeshCertificates {
}

export function dataGoogleContainerClusterMeshCertificatesToTerraform(struct?: DataGoogleContainerClusterMeshCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMeshCertificatesToHclTerraform(struct?: DataGoogleContainerClusterMeshCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMeshCertificatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMeshCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMeshCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_certificates - computed: true, optional: false, required: false
  public get enableCertificates() {
    return this.getBooleanAttribute('enable_certificates');
  }
}

export class DataGoogleContainerClusterMeshCertificatesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMeshCertificatesOutputReference {
    return new DataGoogleContainerClusterMeshCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
}

export function dataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToTerraform(struct?: DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToHclTerraform(struct?: DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_metrics - computed: true, optional: false, required: false
  public get enableMetrics() {
    return this.getBooleanAttribute('enable_metrics');
  }

  // enable_relay - computed: true, optional: false, required: false
  public get enableRelay() {
    return this.getBooleanAttribute('enable_relay');
  }
}

export class DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference {
    return new DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig {
}

export function dataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToTerraform(struct?: DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToHclTerraform(struct?: DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference {
    return new DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMonitoringConfigManagedPrometheus {
}

export function dataGoogleContainerClusterMonitoringConfigManagedPrometheusToTerraform(struct?: DataGoogleContainerClusterMonitoringConfigManagedPrometheus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMonitoringConfigManagedPrometheusToHclTerraform(struct?: DataGoogleContainerClusterMonitoringConfigManagedPrometheus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMonitoringConfigManagedPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMonitoringConfigManagedPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_monitoring_config - computed: true, optional: false, required: false
  private _autoMonitoringConfig = new DataGoogleContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigList(this, "auto_monitoring_config", false);
  public get autoMonitoringConfig() {
    return this._autoMonitoringConfig;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterMonitoringConfigManagedPrometheusList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference {
    return new DataGoogleContainerClusterMonitoringConfigManagedPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterMonitoringConfig {
}

export function dataGoogleContainerClusterMonitoringConfigToTerraform(struct?: DataGoogleContainerClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterMonitoringConfigToHclTerraform(struct?: DataGoogleContainerClusterMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_datapath_observability_config - computed: true, optional: false, required: false
  private _advancedDatapathObservabilityConfig = new DataGoogleContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigList(this, "advanced_datapath_observability_config", false);
  public get advancedDatapathObservabilityConfig() {
    return this._advancedDatapathObservabilityConfig;
  }

  // enable_components - computed: true, optional: false, required: false
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }

  // managed_prometheus - computed: true, optional: false, required: false
  private _managedPrometheus = new DataGoogleContainerClusterMonitoringConfigManagedPrometheusList(this, "managed_prometheus", false);
  public get managedPrometheus() {
    return this._managedPrometheus;
  }
}

export class DataGoogleContainerClusterMonitoringConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterMonitoringConfigOutputReference {
    return new DataGoogleContainerClusterMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNetworkPerformanceConfig {
}

export function dataGoogleContainerClusterNetworkPerformanceConfigToTerraform(struct?: DataGoogleContainerClusterNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNetworkPerformanceConfigToHclTerraform(struct?: DataGoogleContainerClusterNetworkPerformanceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNetworkPerformanceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total_egress_bandwidth_tier - computed: true, optional: false, required: false
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
}

export class DataGoogleContainerClusterNetworkPerformanceConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNetworkPerformanceConfigOutputReference {
    return new DataGoogleContainerClusterNetworkPerformanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNetworkPolicy {
}

export function dataGoogleContainerClusterNetworkPolicyToTerraform(struct?: DataGoogleContainerClusterNetworkPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNetworkPolicyToHclTerraform(struct?: DataGoogleContainerClusterNetworkPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNetworkPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataGoogleContainerClusterNetworkPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNetworkPolicyOutputReference {
    return new DataGoogleContainerClusterNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigAdvancedMachineFeatures {
}

export function dataGoogleContainerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct?: DataGoogleContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_nested_virtualization - computed: true, optional: false, required: false
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }

  // performance_monitoring_unit - computed: true, optional: false, required: false
  public get performanceMonitoringUnit() {
    return this.getStringAttribute('performance_monitoring_unit');
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
}

export class DataGoogleContainerClusterNodeConfigAdvancedMachineFeaturesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference {
    return new DataGoogleContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigBootDisk {
}

export function dataGoogleContainerClusterNodeConfigBootDiskToTerraform(struct?: DataGoogleContainerClusterNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigBootDiskToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigBootDisk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigBootDiskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // provisioned_iops - computed: true, optional: false, required: false
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }

  // provisioned_throughput - computed: true, optional: false, required: false
  public get provisionedThroughput() {
    return this.getNumberAttribute('provisioned_throughput');
  }

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}

export class DataGoogleContainerClusterNodeConfigBootDiskList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigBootDiskOutputReference {
    return new DataGoogleContainerClusterNodeConfigBootDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigConfidentialNodes {
}

export function dataGoogleContainerClusterNodeConfigConfidentialNodesToTerraform(struct?: DataGoogleContainerClusterNodeConfigConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigConfidentialNodesToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigConfidentialNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigConfidentialNodesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidential_instance_type - computed: true, optional: false, required: false
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodeConfigConfidentialNodesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigConfidentialNodesOutputReference {
    return new DataGoogleContainerClusterNodeConfigConfidentialNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_uri - computed: true, optional: false, required: false
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }

  // gcp_secret_manager_certificate_config - computed: true, optional: false, required: false
  private _gcpSecretManagerCertificateConfig = new DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList(this, "gcp_secret_manager_certificate_config", false);
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_domain_config - computed: true, optional: false, required: false
  private _certificateAuthorityDomainConfig = new DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_secret_manager_secret_uri - computed: true, optional: false, required: false
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_secret_manager_secret_uri - computed: true, optional: false, required: false
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_secret_manager_secret_uri - computed: true, optional: false, required: false
  public get gcpSecretManagerSecretUri() {
    return this.getStringAttribute('gcp_secret_manager_secret_uri');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  private _cert = new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientCertList(this, "cert", false);
  public get cert() {
    return this._cert;
  }

  // key - computed: true, optional: false, required: false
  private _key = new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca - computed: true, optional: false, required: false
  private _ca = new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsCaList(this, "ca", false);
  public get ca() {
    return this._ca;
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // client - computed: true, optional: false, required: false
  private _client = new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsClientList(this, "client", false);
  public get client() {
    return this._client;
  }

  // dial_timeout - computed: true, optional: false, required: false
  public get dialTimeout() {
    return this.getStringAttribute('dial_timeout');
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // override_path - computed: true, optional: false, required: false
  public get overridePath() {
    return this.getBooleanAttribute('override_path');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHosts {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroups {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigContainerdConfig {
}

export function dataGoogleContainerClusterNodeConfigContainerdConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigContainerdConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigContainerdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_registry_access_config - computed: true, optional: false, required: false
  private _privateRegistryAccessConfig = new DataGoogleContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigList(this, "private_registry_access_config", false);
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }

  // registry_hosts - computed: true, optional: false, required: false
  private _registryHosts = new DataGoogleContainerClusterNodeConfigContainerdConfigRegistryHostsList(this, "registry_hosts", false);
  public get registryHosts() {
    return this._registryHosts;
  }

  // writable_cgroups - computed: true, optional: false, required: false
  private _writableCgroups = new DataGoogleContainerClusterNodeConfigContainerdConfigWritableCgroupsList(this, "writable_cgroups", false);
  public get writableCgroups() {
    return this._writableCgroups;
  }
}

export class DataGoogleContainerClusterNodeConfigContainerdConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigContainerdConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigContainerdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigEffectiveTaints {
}

export function dataGoogleContainerClusterNodeConfigEffectiveTaintsToTerraform(struct?: DataGoogleContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigEffectiveTaintsToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigEffectiveTaintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigEffectiveTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleContainerClusterNodeConfigEffectiveTaintsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigEffectiveTaintsOutputReference {
    return new DataGoogleContainerClusterNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig {
}

export function dataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_cache_count - computed: true, optional: false, required: false
  public get dataCacheCount() {
    return this.getNumberAttribute('data_cache_count');
  }

  // local_ssd_count - computed: true, optional: false, required: false
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
}

export class DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigFastSocket {
}

export function dataGoogleContainerClusterNodeConfigFastSocketToTerraform(struct?: DataGoogleContainerClusterNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigFastSocketToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigFastSocket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigFastSocketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigFastSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodeConfigFastSocketList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigFastSocketOutputReference {
    return new DataGoogleContainerClusterNodeConfigFastSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigGcfsConfig {
}

export function dataGoogleContainerClusterNodeConfigGcfsConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigGcfsConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigGcfsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigGcfsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigGcfsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodeConfigGcfsConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigGcfsConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigGcfsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
}

export function dataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gpu_driver_version - computed: true, optional: false, required: false
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
}

export class DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig {
}

export function dataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gpu_sharing_strategy - computed: true, optional: false, required: false
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }

  // max_shared_clients_per_gpu - computed: true, optional: false, required: false
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
}

export class DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigGuestAccelerator {
}

export function dataGoogleContainerClusterNodeConfigGuestAcceleratorToTerraform(struct?: DataGoogleContainerClusterNodeConfigGuestAccelerator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigGuestAcceleratorToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigGuestAccelerator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigGuestAcceleratorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigGuestAccelerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigGuestAccelerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // gpu_driver_installation_config - computed: true, optional: false, required: false
  private _gpuDriverInstallationConfig = new DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigList(this, "gpu_driver_installation_config", false);
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }

  // gpu_partition_size - computed: true, optional: false, required: false
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }

  // gpu_sharing_config - computed: true, optional: false, required: false
  private _gpuSharingConfig = new DataGoogleContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigList(this, "gpu_sharing_config", false);
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleContainerClusterNodeConfigGuestAcceleratorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigGuestAcceleratorOutputReference {
    return new DataGoogleContainerClusterNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigGvnic {
}

export function dataGoogleContainerClusterNodeConfigGvnicToTerraform(struct?: DataGoogleContainerClusterNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigGvnicToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigGvnic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigGvnicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigGvnic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataGoogleContainerClusterNodeConfigGvnicList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigGvnicOutputReference {
    return new DataGoogleContainerClusterNodeConfigGvnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigHostMaintenancePolicy {
}

export function dataGoogleContainerClusterNodeConfigHostMaintenancePolicyToTerraform(struct?: DataGoogleContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maintenance_interval - computed: true, optional: false, required: false
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
}

export class DataGoogleContainerClusterNodeConfigHostMaintenancePolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference {
    return new DataGoogleContainerClusterNodeConfigHostMaintenancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim {
}

export function dataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimToTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // imagefs_available - computed: true, optional: false, required: false
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }

  // imagefs_inodes_free - computed: true, optional: false, required: false
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }

  // memory_available - computed: true, optional: false, required: false
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }

  // nodefs_available - computed: true, optional: false, required: false
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }

  // nodefs_inodes_free - computed: true, optional: false, required: false
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }

  // pid_available - computed: true, optional: false, required: false
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference {
    return new DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoft {
}

export function dataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftToTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // imagefs_available - computed: true, optional: false, required: false
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }

  // imagefs_inodes_free - computed: true, optional: false, required: false
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }

  // memory_available - computed: true, optional: false, required: false
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }

  // nodefs_available - computed: true, optional: false, required: false
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }

  // nodefs_inodes_free - computed: true, optional: false, required: false
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }

  // pid_available - computed: true, optional: false, required: false
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftOutputReference {
    return new DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod {
}

export function dataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodToTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // imagefs_available - computed: true, optional: false, required: false
  public get imagefsAvailable() {
    return this.getStringAttribute('imagefs_available');
  }

  // imagefs_inodes_free - computed: true, optional: false, required: false
  public get imagefsInodesFree() {
    return this.getStringAttribute('imagefs_inodes_free');
  }

  // memory_available - computed: true, optional: false, required: false
  public get memoryAvailable() {
    return this.getStringAttribute('memory_available');
  }

  // nodefs_available - computed: true, optional: false, required: false
  public get nodefsAvailable() {
    return this.getStringAttribute('nodefs_available');
  }

  // nodefs_inodes_free - computed: true, optional: false, required: false
  public get nodefsInodesFree() {
    return this.getStringAttribute('nodefs_inodes_free');
  }

  // pid_available - computed: true, optional: false, required: false
  public get pidAvailable() {
    return this.getStringAttribute('pid_available');
  }
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference {
    return new DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManager {
}

export function dataGoogleContainerClusterNodeConfigKubeletConfigMemoryManagerToTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigKubeletConfigMemoryManagerToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManagerList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManagerOutputReference {
    return new DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManager {
}

export function dataGoogleContainerClusterNodeConfigKubeletConfigTopologyManagerToTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigKubeletConfigTopologyManagerToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManagerList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManagerOutputReference {
    return new DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleContainerClusterNodeConfigKubeletConfig {
}

export function dataGoogleContainerClusterNodeConfigKubeletConfigToTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleContainerClusterNodeConfigKubeletConfigToHclTerraform(struct?: DataGoogleContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleContainerClusterNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleContainerClusterNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }

  // container_log_max_files - computed: true, optional: false, required: false
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }

  // container_log_max_size - computed: true, optional: false, required: false
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }

  // cpu_cfs_quota - computed: true, optional: false, required: false
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }

  // cpu_cfs_quota_period - computed: true, optional: false, required: false
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }

  // cpu_manager_policy - computed: true, optional: false, required: false
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }

  // eviction_max_pod_grace_period_seconds - computed: true, optional: false, required: false
  public get evictionMaxPodGracePeriodSeconds() {
    return this.getNumberAttribute('eviction_max_pod_grace_period_seconds');
  }

  // eviction_minimum_reclaim - computed: true, optional: false, required: false
  private _evictionMinimumReclaim = new DataGoogleContainerClusterNodeConfigKubeletConfigEvictionMinimumReclaimList(this, "eviction_minimum_reclaim", false);
  public get evictionMinimumReclaim() {
    return this._evictionMinimumReclaim;
  }

  // eviction_soft - computed: true, optional: false, required: false
  private _evictionSoft = new DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftList(this, "eviction_soft", false);
  public get evictionSoft() {
    return this._evictionSoft;
  }

  // eviction_soft_grace_period - computed: true, optional: false, required: false
  private _evictionSoftGracePeriod = new DataGoogleContainerClusterNodeConfigKubeletConfigEvictionSoftGracePeriodList(this, "eviction_soft_grace_period", false);
  public get evictionSoftGracePeriod() {
    return this._evictionSoftGracePeriod;
  }

  // image_gc_high_threshold_percent - computed: true, optional: false, required: false
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }

  // image_gc_low_threshold_percent - computed: true, optional: false, required: false
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }

  // image_maximum_gc_age - computed: true, optional: false, required: false
  public get imageMaximumGcAge() {
    return this.getStringAttribute('image_maximum_gc_age');
  }

  // image_minimum_gc_age - computed: true, optional: false, required: false
  public get imageMinimumGcAge() {
    return this.getStringAttribute('image_minimum_gc_age');
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: false, required: false
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }

  // max_parallel_image_pulls - computed: true, optional: false, required: false
  public get maxParallelImagePulls() {
    return this.getNumberAttribute('max_parallel_image_pulls');
  }

  // memory_manager - computed: true, optional: false, required: false
  private _memoryManager = new DataGoogleContainerClusterNodeConfigKubeletConfigMemoryManagerList(this, "memory_manager", false);
  public get memoryManager() {
    return this._memoryManager;
  }

  // pod_pids_limit - computed: true, optional: false, required: false
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }

  // single_process_oom_kill - computed: true, optional: false, required: false
  public get singleProcessOomKill() {
    return this.getBooleanAttribute('single_process_oom_kill');
  }

  // topology_manager - computed: true, optional: false, required: false
  private _topologyManager = new DataGoogleContainerClusterNodeConfigKubeletConfigTopologyManagerList(this, "topology_manager", false);
  public get topologyManager() {
    return this._topologyManager;
  }
}

export class DataGoogleContainerClusterNodeConfigKubeletConfigList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleContainerClusterNodeConfigKubeletConfigOutputReference {
    return new DataGoogleContainerClusterNodeConfigKubeletConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
