/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupDrAutoProtectionPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the auto protection policy. This becomes the final component of the policy's resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}
  */
  readonly autoProtectionPolicyId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the auto protection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the auto protection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}
  */
  readonly project?: string;
  /**
  * backup_plan_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}
  */
  readonly backupPlanDetails: BackupDrAutoProtectionPolicyBackupPlanDetails[] | cdktn.IResolvable;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}
  */
  readonly criteria: BackupDrAutoProtectionPolicyCriteria;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}
  */
  readonly timeouts?: BackupDrAutoProtectionPolicyTimeouts;
}
export interface BackupDrAutoProtectionPolicyBindingSummary {
}

export function backupDrAutoProtectionPolicyBindingSummaryToTerraform(struct?: BackupDrAutoProtectionPolicyBindingSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function backupDrAutoProtectionPolicyBindingSummaryToHclTerraform(struct?: BackupDrAutoProtectionPolicyBindingSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupDrAutoProtectionPolicyBindingSummaryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrAutoProtectionPolicyBindingSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrAutoProtectionPolicyBindingSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_count - computed: true, optional: false, required: false
  public get projectCount() {
    return this.getStringAttribute('project_count');
  }
}

export class BackupDrAutoProtectionPolicyBindingSummaryList extends cdktn.ComplexList {

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
  public get(index: number): BackupDrAutoProtectionPolicyBindingSummaryOutputReference {
    return new BackupDrAutoProtectionPolicyBindingSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrAutoProtectionPolicyPolicyEvaluationSummary {
}

export function backupDrAutoProtectionPolicyPolicyEvaluationSummaryToTerraform(struct?: BackupDrAutoProtectionPolicyPolicyEvaluationSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function backupDrAutoProtectionPolicyPolicyEvaluationSummaryToHclTerraform(struct?: BackupDrAutoProtectionPolicyPolicyEvaluationSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrAutoProtectionPolicyPolicyEvaluationSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrAutoProtectionPolicyPolicyEvaluationSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_resource_count - computed: true, optional: false, required: false
  public get failedResourceCount() {
    return this.getStringAttribute('failed_resource_count');
  }

  // matching_resource_count - computed: true, optional: false, required: false
  public get matchingResourceCount() {
    return this.getStringAttribute('matching_resource_count');
  }

  // protected_resource_count - computed: true, optional: false, required: false
  public get protectedResourceCount() {
    return this.getStringAttribute('protected_resource_count');
  }
}

export class BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList extends cdktn.ComplexList {

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
  public get(index: number): BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference {
    return new BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrAutoProtectionPolicyBackupPlanDetails {
  /**
  * The resource name of the backup plan to apply to the matching resources, in the format
  * 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. The backup plan
  * must be in the same location as the auto protection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan BackupDrAutoProtectionPolicy#backup_plan}
  */
  readonly backupPlan: string;
  /**
  * The type of resource that this policy automatically protects, for example
  * 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#resource_type BackupDrAutoProtectionPolicy#resource_type}
  */
  readonly resourceType: string;
}

export function backupDrAutoProtectionPolicyBackupPlanDetailsToTerraform(struct?: BackupDrAutoProtectionPolicyBackupPlanDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backup_plan: cdktn.stringToTerraform(struct!.backupPlan),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function backupDrAutoProtectionPolicyBackupPlanDetailsToHclTerraform(struct?: BackupDrAutoProtectionPolicyBackupPlanDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backup_plan: {
      value: cdktn.stringToHclTerraform(struct!.backupPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrAutoProtectionPolicyBackupPlanDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPlan = this._backupPlan;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrAutoProtectionPolicyBackupPlanDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPlan = undefined;
      this._resourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPlan = value.backupPlan;
      this._resourceType = value.resourceType;
    }
  }

  // backup_plan - computed: false, optional: false, required: true
  private _backupPlan?: string; 
  public get backupPlan() {
    return this.getStringAttribute('backup_plan');
  }
  public set backupPlan(value: string) {
    this._backupPlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanInput() {
    return this._backupPlan;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class BackupDrAutoProtectionPolicyBackupPlanDetailsList extends cdktn.ComplexList {
  public internalValue? : BackupDrAutoProtectionPolicyBackupPlanDetails[] | cdktn.IResolvable

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
  public get(index: number): BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference {
    return new BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition {
  /**
  * The key of the label to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#key BackupDrAutoProtectionPolicy#key}
  */
  readonly key: string;
  /**
  * The values of the label to match. A resource matches the condition if its label
  * value is equal to any of the listed values. Currently, only one value is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#values BackupDrAutoProtectionPolicy#values}
  */
  readonly values: string[];
}

export function backupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionToTerraform(struct?: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference | BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function backupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionToHclTerraform(struct?: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference | BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface BackupDrAutoProtectionPolicyCriteriaMatchingConditions {
  /**
  * label_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#label_condition BackupDrAutoProtectionPolicy#label_condition}
  */
  readonly labelCondition?: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;
}

export function backupDrAutoProtectionPolicyCriteriaMatchingConditionsToTerraform(struct?: BackupDrAutoProtectionPolicyCriteriaMatchingConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label_condition: backupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionToTerraform(struct!.labelCondition),
  }
}


export function backupDrAutoProtectionPolicyCriteriaMatchingConditionsToHclTerraform(struct?: BackupDrAutoProtectionPolicyCriteriaMatchingConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    label_condition: {
      value: backupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionToHclTerraform(struct!.labelCondition),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrAutoProtectionPolicyCriteriaMatchingConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelCondition = this._labelCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrAutoProtectionPolicyCriteriaMatchingConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelCondition.internalValue = value.labelCondition;
    }
  }

  // label_condition - computed: false, optional: true, required: false
  private _labelCondition = new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(this, "label_condition");
  public get labelCondition() {
    return this._labelCondition;
  }
  public putLabelCondition(value: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition) {
    this._labelCondition.internalValue = value;
  }
  public resetLabelCondition() {
    this._labelCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelConditionInput() {
    return this._labelCondition.internalValue;
  }
}

export class BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList extends cdktn.ComplexList {
  public internalValue? : BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] | cdktn.IResolvable

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
  public get(index: number): BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference {
    return new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrAutoProtectionPolicyCriteria {
  /**
  * matching_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#matching_conditions BackupDrAutoProtectionPolicy#matching_conditions}
  */
  readonly matchingConditions: BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] | cdktn.IResolvable;
}

export function backupDrAutoProtectionPolicyCriteriaToTerraform(struct?: BackupDrAutoProtectionPolicyCriteriaOutputReference | BackupDrAutoProtectionPolicyCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_conditions: cdktn.listMapper(backupDrAutoProtectionPolicyCriteriaMatchingConditionsToTerraform, true)(struct!.matchingConditions),
  }
}


export function backupDrAutoProtectionPolicyCriteriaToHclTerraform(struct?: BackupDrAutoProtectionPolicyCriteriaOutputReference | BackupDrAutoProtectionPolicyCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_conditions: {
      value: cdktn.listMapperHcl(backupDrAutoProtectionPolicyCriteriaMatchingConditionsToHclTerraform, true)(struct!.matchingConditions),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrAutoProtectionPolicyCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrAutoProtectionPolicyCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingConditions = this._matchingConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrAutoProtectionPolicyCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingConditions.internalValue = value.matchingConditions;
    }
  }

  // matching_conditions - computed: false, optional: false, required: true
  private _matchingConditions = new BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(this, "matching_conditions", false);
  public get matchingConditions() {
    return this._matchingConditions;
  }
  public putMatchingConditions(value: BackupDrAutoProtectionPolicyCriteriaMatchingConditions[] | cdktn.IResolvable) {
    this._matchingConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingConditionsInput() {
    return this._matchingConditions.internalValue;
  }
}
export interface BackupDrAutoProtectionPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}
  */
  readonly update?: string;
}

export function backupDrAutoProtectionPolicyTimeoutsToTerraform(struct?: BackupDrAutoProtectionPolicyTimeouts | cdktn.IResolvable): any {
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


export function backupDrAutoProtectionPolicyTimeoutsToHclTerraform(struct?: BackupDrAutoProtectionPolicyTimeouts | cdktn.IResolvable): any {
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

export class BackupDrAutoProtectionPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupDrAutoProtectionPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BackupDrAutoProtectionPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}
*/
export class BackupDrAutoProtectionPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_auto_protection_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupDrAutoProtectionPolicy to import
  * @param importFromId The id of the existing BackupDrAutoProtectionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupDrAutoProtectionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_auto_protection_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupDrAutoProtectionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BackupDrAutoProtectionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_auto_protection_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.11.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoProtectionPolicyId = config.autoProtectionPolicyId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._backupPlanDetails.internalValue = config.backupPlanDetails;
    this._criteria.internalValue = config.criteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_protection_policy_id - computed: false, optional: false, required: true
  private _autoProtectionPolicyId?: string; 
  public get autoProtectionPolicyId() {
    return this.getStringAttribute('auto_protection_policy_id');
  }
  public set autoProtectionPolicyId(value: string) {
    this._autoProtectionPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProtectionPolicyIdInput() {
    return this._autoProtectionPolicyId;
  }

  // binding_summary - computed: true, optional: false, required: false
  private _bindingSummary = new BackupDrAutoProtectionPolicyBindingSummaryList(this, "binding_summary", false);
  public get bindingSummary() {
    return this._bindingSummary;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_evaluation_summary - computed: true, optional: false, required: false
  private _policyEvaluationSummary = new BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(this, "policy_evaluation_summary", false);
  public get policyEvaluationSummary() {
    return this._policyEvaluationSummary;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // backup_plan_details - computed: false, optional: false, required: true
  private _backupPlanDetails = new BackupDrAutoProtectionPolicyBackupPlanDetailsList(this, "backup_plan_details", false);
  public get backupPlanDetails() {
    return this._backupPlanDetails;
  }
  public putBackupPlanDetails(value: BackupDrAutoProtectionPolicyBackupPlanDetails[] | cdktn.IResolvable) {
    this._backupPlanDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanDetailsInput() {
    return this._backupPlanDetails.internalValue;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new BackupDrAutoProtectionPolicyCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: BackupDrAutoProtectionPolicyCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupDrAutoProtectionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupDrAutoProtectionPolicyTimeouts) {
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
      auto_protection_policy_id: cdktn.stringToTerraform(this._autoProtectionPolicyId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      backup_plan_details: cdktn.listMapper(backupDrAutoProtectionPolicyBackupPlanDetailsToTerraform, true)(this._backupPlanDetails.internalValue),
      criteria: backupDrAutoProtectionPolicyCriteriaToTerraform(this._criteria.internalValue),
      timeouts: backupDrAutoProtectionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_protection_policy_id: {
        value: cdktn.stringToHclTerraform(this._autoProtectionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      backup_plan_details: {
        value: cdktn.listMapperHcl(backupDrAutoProtectionPolicyBackupPlanDetailsToHclTerraform, true)(this._backupPlanDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrAutoProtectionPolicyBackupPlanDetailsList",
      },
      criteria: {
        value: backupDrAutoProtectionPolicyCriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrAutoProtectionPolicyCriteriaList",
      },
      timeouts: {
        value: backupDrAutoProtectionPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupDrAutoProtectionPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
