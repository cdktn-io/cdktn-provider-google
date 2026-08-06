/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleArtifactRegistryRepositoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository#id DataGoogleArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the repository's location. In addition to specific regions,
  * special values for multi-region locations are 'asia', 'europe', and 'us'.
  * See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
  * or use the
  * [google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
  * data source for possible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository#location DataGoogleArtifactRegistryRepository#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository#project DataGoogleArtifactRegistryRepository#project}
  */
  readonly project?: string;
  /**
  * The last part of the repository name, for example:
  * "repo1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository#repository_id DataGoogleArtifactRegistryRepository#repository_id}
  */
  readonly repositoryId: string;
}
export interface DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition {
}

export function dataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionToTerraform(struct?: DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryCleanupPoliciesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // newer_than - computed: true, optional: false, required: false
  public get newerThan() {
    return this.getStringAttribute('newer_than');
  }

  // older_than - computed: true, optional: false, required: false
  public get olderThan() {
    return this.getStringAttribute('older_than');
  }

  // package_name_prefixes - computed: true, optional: false, required: false
  public get packageNamePrefixes() {
    return this.getListAttribute('package_name_prefixes');
  }

  // tag_prefixes - computed: true, optional: false, required: false
  public get tagPrefixes() {
    return this.getListAttribute('tag_prefixes');
  }

  // tag_state - computed: true, optional: false, required: false
  public get tagState() {
    return this.getStringAttribute('tag_state');
  }

  // version_name_prefixes - computed: true, optional: false, required: false
  public get versionNamePrefixes() {
    return this.getListAttribute('version_name_prefixes');
  }
}

export class DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference {
    return new DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions {
}

export function dataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToTerraform(struct?: DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keep_count - computed: true, optional: false, required: false
  public get keepCount() {
    return this.getNumberAttribute('keep_count');
  }

  // package_name_prefixes - computed: true, optional: false, required: false
  public get packageNamePrefixes() {
    return this.getListAttribute('package_name_prefixes');
  }
}

export class DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference {
    return new DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryCleanupPolicies {
}

export function dataGoogleArtifactRegistryRepositoryCleanupPoliciesToTerraform(struct?: DataGoogleArtifactRegistryRepositoryCleanupPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryCleanupPoliciesToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryCleanupPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryCleanupPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryCleanupPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataGoogleArtifactRegistryRepositoryCleanupPoliciesConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // most_recent_versions - computed: true, optional: false, required: false
  private _mostRecentVersions = new DataGoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList(this, "most_recent_versions", false);
  public get mostRecentVersions() {
    return this._mostRecentVersions;
  }
}

export class DataGoogleArtifactRegistryRepositoryCleanupPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference {
    return new DataGoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryDockerConfig {
}

export function dataGoogleArtifactRegistryRepositoryDockerConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryDockerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryDockerConfigToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryDockerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryDockerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryDockerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // immutable_tags - computed: true, optional: false, required: false
  public get immutableTags() {
    return this.getBooleanAttribute('immutable_tags');
  }
}

export class DataGoogleArtifactRegistryRepositoryDockerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryMavenConfig {
}

export function dataGoogleArtifactRegistryRepositoryMavenConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryMavenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryMavenConfigToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryMavenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryMavenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryMavenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_snapshot_overwrites - computed: true, optional: false, required: false
  public get allowSnapshotOverwrites() {
    return this.getBooleanAttribute('allow_snapshot_overwrites');
  }

  // version_policy - computed: true, optional: false, required: false
  public get versionPolicy() {
    return this.getStringAttribute('version_policy');
  }
}

export class DataGoogleArtifactRegistryRepositoryMavenConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_base - computed: true, optional: false, required: false
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }

  // repository_path - computed: true, optional: false, required: false
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  private _publicRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList(this, "public_repository", false);
  public get publicRepository() {
    return this._publicRepository;
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_repository - computed: true, optional: false, required: false
  private _customRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryList(this, "custom_repository", false);
  public get customRepository() {
    return this._customRepository;
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_repository - computed: true, optional: false, required: false
  private _customRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryList(this, "custom_repository", false);
  public get customRepository() {
    return this._customRepository;
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCache {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCacheToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCache): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCacheToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCache): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCacheOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCacheList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCacheOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_repository - computed: true, optional: false, required: false
  private _customRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryList(this, "custom_repository", false);
  public get customRepository() {
    return this._customRepository;
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_repository - computed: true, optional: false, required: false
  private _customRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryList(this, "custom_repository", false);
  public get customRepository() {
    return this._customRepository;
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_secret_version - computed: true, optional: false, required: false
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // username_password_credentials - computed: true, optional: false, required: false
  private _usernamePasswordCredentials = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList(this, "username_password_credentials", false);
  public get usernamePasswordCredentials() {
    return this._usernamePasswordCredentials;
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_base - computed: true, optional: false, required: false
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }

  // repository_path - computed: true, optional: false, required: false
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  private _publicRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList(this, "public_repository", false);
  public get publicRepository() {
    return this._publicRepository;
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apt_repository - computed: true, optional: false, required: false
  private _aptRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList(this, "apt_repository", false);
  public get aptRepository() {
    return this._aptRepository;
  }

  // common_repository - computed: true, optional: false, required: false
  private _commonRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryList(this, "common_repository", false);
  public get commonRepository() {
    return this._commonRepository;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_upstream_validation - computed: true, optional: false, required: false
  public get disableUpstreamValidation() {
    return this.getBooleanAttribute('disable_upstream_validation');
  }

  // docker_repository - computed: true, optional: false, required: false
  private _dockerRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList(this, "docker_repository", false);
  public get dockerRepository() {
    return this._dockerRepository;
  }

  // maven_repository - computed: true, optional: false, required: false
  private _mavenRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList(this, "maven_repository", false);
  public get mavenRepository() {
    return this._mavenRepository;
  }

  // no_cache - computed: true, optional: false, required: false
  private _noCache = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNoCacheList(this, "no_cache", false);
  public get noCache() {
    return this._noCache;
  }

  // npm_repository - computed: true, optional: false, required: false
  private _npmRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList(this, "npm_repository", false);
  public get npmRepository() {
    return this._npmRepository;
  }

  // python_repository - computed: true, optional: false, required: false
  private _pythonRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList(this, "python_repository", false);
  public get pythonRepository() {
    return this._pythonRepository;
  }

  // upstream_credentials - computed: true, optional: false, required: false
  private _upstreamCredentials = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList(this, "upstream_credentials", false);
  public get upstreamCredentials() {
    return this._upstreamCredentials;
  }

  // yum_repository - computed: true, optional: false, required: false
  private _yumRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList(this, "yum_repository", false);
  public get yumRepository() {
    return this._yumRepository;
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies {
}

export function dataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToTerraform(struct?: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference {
    return new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig {
}

export function dataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // upstream_policies - computed: true, optional: false, required: false
  private _upstreamPolicies = new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(this, "upstream_policies", false);
  public get upstreamPolicies() {
    return this._upstreamPolicies;
  }
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfig {
}

export function dataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfigToHclTerraform(struct?: DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enablement_config - computed: true, optional: false, required: false
  public get enablementConfig() {
    return this.getStringAttribute('enablement_config');
  }

  // enablement_state - computed: true, optional: false, required: false
  public get enablementState() {
    return this.getStringAttribute('enablement_state');
  }

  // enablement_state_reason - computed: true, optional: false, required: false
  public get enablementStateReason() {
    return this.getStringAttribute('enablement_state_reason');
  }
}

export class DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository google_artifact_registry_repository}
*/
export class DataGoogleArtifactRegistryRepository extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleArtifactRegistryRepository resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleArtifactRegistryRepository to import
  * @param importFromId The id of the existing DataGoogleArtifactRegistryRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleArtifactRegistryRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_artifact_registry_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/artifact_registry_repository google_artifact_registry_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleArtifactRegistryRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleArtifactRegistryRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_repository',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_policies - computed: true, optional: false, required: false
  private _cleanupPolicies = new DataGoogleArtifactRegistryRepositoryCleanupPoliciesList(this, "cleanup_policies", true);
  public get cleanupPolicies() {
    return this._cleanupPolicies;
  }

  // cleanup_policy_dry_run - computed: true, optional: false, required: false
  public get cleanupPolicyDryRun() {
    return this.getBooleanAttribute('cleanup_policy_dry_run');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: false, required: false
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // docker_config - computed: true, optional: false, required: false
  private _dockerConfig = new DataGoogleArtifactRegistryRepositoryDockerConfigList(this, "docker_config", false);
  public get dockerConfig() {
    return this._dockerConfig;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maven_config - computed: true, optional: false, required: false
  private _mavenConfig = new DataGoogleArtifactRegistryRepositoryMavenConfigList(this, "maven_config", false);
  public get mavenConfig() {
    return this._mavenConfig;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // registry_uri - computed: true, optional: false, required: false
  public get registryUri() {
    return this.getStringAttribute('registry_uri');
  }

  // remote_repository_config - computed: true, optional: false, required: false
  private _remoteRepositoryConfig = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList(this, "remote_repository_config", false);
  public get remoteRepositoryConfig() {
    return this._remoteRepositoryConfig;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // virtual_repository_config - computed: true, optional: false, required: false
  private _virtualRepositoryConfig = new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList(this, "virtual_repository_config", false);
  public get virtualRepositoryConfig() {
    return this._virtualRepositoryConfig;
  }

  // vulnerability_scanning_config - computed: true, optional: false, required: false
  private _vulnerabilityScanningConfig = new DataGoogleArtifactRegistryRepositoryVulnerabilityScanningConfigList(this, "vulnerability_scanning_config", false);
  public get vulnerabilityScanningConfig() {
    return this._vulnerabilityScanningConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      repository_id: cdktn.stringToTerraform(this._repositoryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktn.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
