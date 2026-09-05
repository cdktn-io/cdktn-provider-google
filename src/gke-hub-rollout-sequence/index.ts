/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GkeHubRolloutSequenceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#deletion_policy GkeHubRolloutSequence#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human readable display name of the Rollout Sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#display_name GkeHubRolloutSequence#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels for this Rollout Sequence.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#labels GkeHubRolloutSequence#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Minimum control plane version that the clusters in the sequence should be upgraded to.
  * Setting this field will cause the creation of a rollout to the specified version.
  * Any rollout of the same type already running on the first stage of the sequence will be cancelled to allow for the creation of the new rollout.
  * Should be a valid [semantic version](https://semver.org/).
  * Version aliases are supported, as described in the [cluster version docs](https://docs.cloud.google.com/kubernetes-engine/versioning#specifying_cluster_version).
  * Note that the 'latest' and '-' aliases are not supported for this field.
  * Supported formats: '1.X', '1.X.Y', '1.X.Y-gke.N'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#min_control_plane_version GkeHubRolloutSequence#min_control_plane_version}
  */
  readonly minControlPlaneVersion?: string;
  /**
  * Minimum node version that the clusters in the sequence should be upgraded to.
  * Setting this field will cause the creation of a rollout to the specified version.
  * Any rollout of the same type already running on the first stage of the sequence will be cancelled to allow for the creation of the new rollout.
  * Should be a valid [semantic version](https://semver.org/).
  * Version aliases are supported, as described in the [cluster version docs](https://docs.cloud.google.com/kubernetes-engine/versioning#specifying_cluster_version).
  * Note that the 'latest' and '-' aliases are not supported for this field.
  * Supported formats: '1.X', '1.X.Y', '1.X.Y-gke.N'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#min_node_version GkeHubRolloutSequence#min_node_version}
  */
  readonly minNodeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}
  */
  readonly project?: string;
  /**
  * The user-provided identifier of the RolloutSequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#rollout_sequence_id GkeHubRolloutSequence#rollout_sequence_id}
  */
  readonly rolloutSequenceId: string;
  /**
  * auto_upgrade_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#auto_upgrade_config GkeHubRolloutSequence#auto_upgrade_config}
  */
  readonly autoUpgradeConfig?: GkeHubRolloutSequenceAutoUpgradeConfig;
  /**
  * ignored_clusters_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#ignored_clusters_selector GkeHubRolloutSequence#ignored_clusters_selector}
  */
  readonly ignoredClustersSelector?: GkeHubRolloutSequenceIgnoredClustersSelector;
  /**
  * stages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#stages GkeHubRolloutSequence#stages}
  */
  readonly stages: GkeHubRolloutSequenceStages[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#timeouts GkeHubRolloutSequence#timeouts}
  */
  readonly timeouts?: GkeHubRolloutSequenceTimeouts;
}
export interface GkeHubRolloutSequenceOperationalState {
}

export function gkeHubRolloutSequenceOperationalStateToTerraform(struct?: GkeHubRolloutSequenceOperationalState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function gkeHubRolloutSequenceOperationalStateToHclTerraform(struct?: GkeHubRolloutSequenceOperationalState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeHubRolloutSequenceOperationalStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GkeHubRolloutSequenceOperationalState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubRolloutSequenceOperationalState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GkeHubRolloutSequenceOperationalStateList extends cdktn.ComplexList {

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
  public get(index: number): GkeHubRolloutSequenceOperationalStateOutputReference {
    return new GkeHubRolloutSequenceOperationalStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope {
  /**
  * The list of enabled upgrade types.
  * Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#upgrade_types GkeHubRolloutSequence#upgrade_types}
  */
  readonly upgradeTypes?: string[];
}

export function gkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeToTerraform(struct?: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference | GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    upgrade_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.upgradeTypes),
  }
}


export function gkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeToHclTerraform(struct?: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference | GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    upgrade_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.upgradeTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upgradeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeTypes = this._upgradeTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upgradeTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upgradeTypes = value.upgradeTypes;
    }
  }

  // upgrade_types - computed: false, optional: true, required: false
  private _upgradeTypes?: string[]; 
  public get upgradeTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('upgrade_types'));
  }
  public set upgradeTypes(value: string[]) {
    this._upgradeTypes = value;
  }
  public resetUpgradeTypes() {
    this._upgradeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypesInput() {
    return this._upgradeTypes;
  }
}
export interface GkeHubRolloutSequenceAutoUpgradeConfig {
  /**
  * rollout_creation_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#rollout_creation_scope GkeHubRolloutSequence#rollout_creation_scope}
  */
  readonly rolloutCreationScope?: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;
}

export function gkeHubRolloutSequenceAutoUpgradeConfigToTerraform(struct?: GkeHubRolloutSequenceAutoUpgradeConfigOutputReference | GkeHubRolloutSequenceAutoUpgradeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rollout_creation_scope: gkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeToTerraform(struct!.rolloutCreationScope),
  }
}


export function gkeHubRolloutSequenceAutoUpgradeConfigToHclTerraform(struct?: GkeHubRolloutSequenceAutoUpgradeConfigOutputReference | GkeHubRolloutSequenceAutoUpgradeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rollout_creation_scope: {
      value: gkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeToHclTerraform(struct!.rolloutCreationScope),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubRolloutSequenceAutoUpgradeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubRolloutSequenceAutoUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolloutCreationScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutCreationScope = this._rolloutCreationScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubRolloutSequenceAutoUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rolloutCreationScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rolloutCreationScope.internalValue = value.rolloutCreationScope;
    }
  }

  // rollout_creation_scope - computed: false, optional: true, required: false
  private _rolloutCreationScope = new GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(this, "rollout_creation_scope");
  public get rolloutCreationScope() {
    return this._rolloutCreationScope;
  }
  public putRolloutCreationScope(value: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope) {
    this._rolloutCreationScope.internalValue = value;
  }
  public resetRolloutCreationScope() {
    this._rolloutCreationScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutCreationScopeInput() {
    return this._rolloutCreationScope.internalValue;
  }
}
export interface GkeHubRolloutSequenceIgnoredClustersSelector {
  /**
  * The label selector must be a valid CEL (Common Expression Language) expression which
  * evaluates resource.labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}
  */
  readonly labelSelector: string;
}

export function gkeHubRolloutSequenceIgnoredClustersSelectorToTerraform(struct?: GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference | GkeHubRolloutSequenceIgnoredClustersSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_selector: cdktn.stringToTerraform(struct!.labelSelector),
  }
}


export function gkeHubRolloutSequenceIgnoredClustersSelectorToHclTerraform(struct?: GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference | GkeHubRolloutSequenceIgnoredClustersSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label_selector: {
      value: cdktn.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubRolloutSequenceIgnoredClustersSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubRolloutSequenceIgnoredClustersSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelSelector = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: false, required: true
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }
}
export interface GkeHubRolloutSequenceStagesClusterSelector {
  /**
  * The label selector must be a valid CEL (Common Expression Language) expression which
  * evaluates resource.labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}
  */
  readonly labelSelector: string;
}

export function gkeHubRolloutSequenceStagesClusterSelectorToTerraform(struct?: GkeHubRolloutSequenceStagesClusterSelectorOutputReference | GkeHubRolloutSequenceStagesClusterSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_selector: cdktn.stringToTerraform(struct!.labelSelector),
  }
}


export function gkeHubRolloutSequenceStagesClusterSelectorToHclTerraform(struct?: GkeHubRolloutSequenceStagesClusterSelectorOutputReference | GkeHubRolloutSequenceStagesClusterSelector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label_selector: {
      value: cdktn.stringToHclTerraform(struct!.labelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubRolloutSequenceStagesClusterSelectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubRolloutSequenceStagesClusterSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubRolloutSequenceStagesClusterSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelSelector = value.labelSelector;
    }
  }

  // label_selector - computed: false, optional: false, required: true
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }
}
export interface GkeHubRolloutSequenceStages {
  /**
  * List of Fleet projects to select the clusters from.
  * Expected format: projects/{project}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#fleet_projects GkeHubRolloutSequence#fleet_projects}
  */
  readonly fleetProjects: string[];
  /**
  * Soak time after upgrading all the clusters in the stage.
  * Has to be specified in seconds, minutes, hours or days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#soak_duration GkeHubRolloutSequence#soak_duration}
  */
  readonly soakDuration?: string;
  /**
  * cluster_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#cluster_selector GkeHubRolloutSequence#cluster_selector}
  */
  readonly clusterSelector?: GkeHubRolloutSequenceStagesClusterSelector;
}

export function gkeHubRolloutSequenceStagesToTerraform(struct?: GkeHubRolloutSequenceStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fleet_projects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fleetProjects),
    soak_duration: cdktn.stringToTerraform(struct!.soakDuration),
    cluster_selector: gkeHubRolloutSequenceStagesClusterSelectorToTerraform(struct!.clusterSelector),
  }
}


export function gkeHubRolloutSequenceStagesToHclTerraform(struct?: GkeHubRolloutSequenceStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fleet_projects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fleetProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    soak_duration: {
      value: cdktn.stringToHclTerraform(struct!.soakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_selector: {
      value: gkeHubRolloutSequenceStagesClusterSelectorToHclTerraform(struct!.clusterSelector),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubRolloutSequenceStagesClusterSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubRolloutSequenceStagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GkeHubRolloutSequenceStages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fleetProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetProjects = this._fleetProjects;
    }
    if (this._soakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.soakDuration = this._soakDuration;
    }
    if (this._clusterSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelector = this._clusterSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubRolloutSequenceStages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fleetProjects = undefined;
      this._soakDuration = undefined;
      this._clusterSelector.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fleetProjects = value.fleetProjects;
      this._soakDuration = value.soakDuration;
      this._clusterSelector.internalValue = value.clusterSelector;
    }
  }

  // fleet_projects - computed: false, optional: false, required: true
  private _fleetProjects?: string[]; 
  public get fleetProjects() {
    return this.getListAttribute('fleet_projects');
  }
  public set fleetProjects(value: string[]) {
    this._fleetProjects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetProjectsInput() {
    return this._fleetProjects;
  }

  // soak_duration - computed: false, optional: true, required: false
  private _soakDuration?: string; 
  public get soakDuration() {
    return this.getStringAttribute('soak_duration');
  }
  public set soakDuration(value: string) {
    this._soakDuration = value;
  }
  public resetSoakDuration() {
    this._soakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soakDurationInput() {
    return this._soakDuration;
  }

  // cluster_selector - computed: false, optional: true, required: false
  private _clusterSelector = new GkeHubRolloutSequenceStagesClusterSelectorOutputReference(this, "cluster_selector");
  public get clusterSelector() {
    return this._clusterSelector;
  }
  public putClusterSelector(value: GkeHubRolloutSequenceStagesClusterSelector) {
    this._clusterSelector.internalValue = value;
  }
  public resetClusterSelector() {
    this._clusterSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector.internalValue;
  }
}

export class GkeHubRolloutSequenceStagesList extends cdktn.ComplexList {
  public internalValue? : GkeHubRolloutSequenceStages[] | cdktn.IResolvable

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
  public get(index: number): GkeHubRolloutSequenceStagesOutputReference {
    return new GkeHubRolloutSequenceStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubRolloutSequenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}
  */
  readonly update?: string;
}

export function gkeHubRolloutSequenceTimeoutsToTerraform(struct?: GkeHubRolloutSequenceTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function gkeHubRolloutSequenceTimeoutsToHclTerraform(struct?: GkeHubRolloutSequenceTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubRolloutSequenceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeHubRolloutSequenceTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubRolloutSequenceTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence google_gke_hub_rollout_sequence}
*/
export class GkeHubRolloutSequence extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_rollout_sequence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeHubRolloutSequence to import
  * @param importFromId The id of the existing GkeHubRolloutSequence that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeHubRolloutSequence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_rollout_sequence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/gke_hub_rollout_sequence google_gke_hub_rollout_sequence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubRolloutSequenceConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubRolloutSequenceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_rollout_sequence',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._minControlPlaneVersion = config.minControlPlaneVersion;
    this._minNodeVersion = config.minNodeVersion;
    this._project = config.project;
    this._rolloutSequenceId = config.rolloutSequenceId;
    this._autoUpgradeConfig.internalValue = config.autoUpgradeConfig;
    this._ignoredClustersSelector.internalValue = config.ignoredClustersSelector;
    this._stages.internalValue = config.stages;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // min_control_plane_version - computed: false, optional: true, required: false
  private _minControlPlaneVersion?: string; 
  public get minControlPlaneVersion() {
    return this.getStringAttribute('min_control_plane_version');
  }
  public set minControlPlaneVersion(value: string) {
    this._minControlPlaneVersion = value;
  }
  public resetMinControlPlaneVersion() {
    this._minControlPlaneVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minControlPlaneVersionInput() {
    return this._minControlPlaneVersion;
  }

  // min_node_version - computed: false, optional: true, required: false
  private _minNodeVersion?: string; 
  public get minNodeVersion() {
    return this.getStringAttribute('min_node_version');
  }
  public set minNodeVersion(value: string) {
    this._minNodeVersion = value;
  }
  public resetMinNodeVersion() {
    this._minNodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeVersionInput() {
    return this._minNodeVersion;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_state - computed: true, optional: false, required: false
  private _operationalState = new GkeHubRolloutSequenceOperationalStateList(this, "operational_state", false);
  public get operationalState() {
    return this._operationalState;
  }

  // project - computed: true, optional: true, required: false
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

  // rollout_sequence_id - computed: false, optional: false, required: true
  private _rolloutSequenceId?: string; 
  public get rolloutSequenceId() {
    return this.getStringAttribute('rollout_sequence_id');
  }
  public set rolloutSequenceId(value: string) {
    this._rolloutSequenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutSequenceIdInput() {
    return this._rolloutSequenceId;
  }

  // target_control_plane_version - computed: true, optional: false, required: false
  public get targetControlPlaneVersion() {
    return this.getStringAttribute('target_control_plane_version');
  }

  // target_node_version - computed: true, optional: false, required: false
  public get targetNodeVersion() {
    return this.getStringAttribute('target_node_version');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // auto_upgrade_config - computed: false, optional: true, required: false
  private _autoUpgradeConfig = new GkeHubRolloutSequenceAutoUpgradeConfigOutputReference(this, "auto_upgrade_config");
  public get autoUpgradeConfig() {
    return this._autoUpgradeConfig;
  }
  public putAutoUpgradeConfig(value: GkeHubRolloutSequenceAutoUpgradeConfig) {
    this._autoUpgradeConfig.internalValue = value;
  }
  public resetAutoUpgradeConfig() {
    this._autoUpgradeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeConfigInput() {
    return this._autoUpgradeConfig.internalValue;
  }

  // ignored_clusters_selector - computed: false, optional: true, required: false
  private _ignoredClustersSelector = new GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(this, "ignored_clusters_selector");
  public get ignoredClustersSelector() {
    return this._ignoredClustersSelector;
  }
  public putIgnoredClustersSelector(value: GkeHubRolloutSequenceIgnoredClustersSelector) {
    this._ignoredClustersSelector.internalValue = value;
  }
  public resetIgnoredClustersSelector() {
    this._ignoredClustersSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredClustersSelectorInput() {
    return this._ignoredClustersSelector.internalValue;
  }

  // stages - computed: false, optional: false, required: true
  private _stages = new GkeHubRolloutSequenceStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: GkeHubRolloutSequenceStages[] | cdktn.IResolvable) {
    this._stages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeHubRolloutSequenceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeHubRolloutSequenceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      min_control_plane_version: cdktn.stringToTerraform(this._minControlPlaneVersion),
      min_node_version: cdktn.stringToTerraform(this._minNodeVersion),
      project: cdktn.stringToTerraform(this._project),
      rollout_sequence_id: cdktn.stringToTerraform(this._rolloutSequenceId),
      auto_upgrade_config: gkeHubRolloutSequenceAutoUpgradeConfigToTerraform(this._autoUpgradeConfig.internalValue),
      ignored_clusters_selector: gkeHubRolloutSequenceIgnoredClustersSelectorToTerraform(this._ignoredClustersSelector.internalValue),
      stages: cdktn.listMapper(gkeHubRolloutSequenceStagesToTerraform, true)(this._stages.internalValue),
      timeouts: gkeHubRolloutSequenceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      min_control_plane_version: {
        value: cdktn.stringToHclTerraform(this._minControlPlaneVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_node_version: {
        value: cdktn.stringToHclTerraform(this._minNodeVersion),
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
      rollout_sequence_id: {
        value: cdktn.stringToHclTerraform(this._rolloutSequenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_upgrade_config: {
        value: gkeHubRolloutSequenceAutoUpgradeConfigToHclTerraform(this._autoUpgradeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubRolloutSequenceAutoUpgradeConfigList",
      },
      ignored_clusters_selector: {
        value: gkeHubRolloutSequenceIgnoredClustersSelectorToHclTerraform(this._ignoredClustersSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubRolloutSequenceIgnoredClustersSelectorList",
      },
      stages: {
        value: cdktn.listMapperHcl(gkeHubRolloutSequenceStagesToHclTerraform, true)(this._stages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubRolloutSequenceStagesList",
      },
      timeouts: {
        value: gkeHubRolloutSequenceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeHubRolloutSequenceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
