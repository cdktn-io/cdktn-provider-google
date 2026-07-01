/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleParserConfig extends cdktn.TerraformMetaArguments {
  /**
  * if the parser is built using config
  * documentation:
  * https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#cbn ChronicleParser#cbn}
  */
  readonly cbn?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#deletion_policy ChronicleParser#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#id ChronicleParser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#instance ChronicleParser#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#location ChronicleParser#location}
  */
  readonly location: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#logtype ChronicleParser#logtype}
  */
  readonly logtype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#project ChronicleParser#project}
  */
  readonly project?: string;
  /**
  * Flag to bypass parser validation when no logs are found.
  * If enabled, the parser won't be be rejected during the validation
  * phase when no logs are found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#validated_on_empty_logs ChronicleParser#validated_on_empty_logs}
  */
  readonly validatedOnEmptyLogs?: boolean | cdktn.IResolvable;
  /**
  * If true, bypasses parser validation.
  * If enabled, the parser won't be rejected during the validation
  * phase and validation will be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#validation_skipped ChronicleParser#validation_skipped}
  */
  readonly validationSkipped?: boolean | cdktn.IResolvable;
  /**
  * low_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#low_code ChronicleParser#low_code}
  */
  readonly lowCode?: ChronicleParserLowCode;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#timeouts ChronicleParser#timeouts}
  */
  readonly timeouts?: ChronicleParserTimeouts;
  /**
  * version_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#version_info ChronicleParser#version_info}
  */
  readonly versionInfo?: ChronicleParserVersionInfo;
}
export interface ChronicleParserChangelogsEntries {
}

export function chronicleParserChangelogsEntriesToTerraform(struct?: ChronicleParserChangelogsEntries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function chronicleParserChangelogsEntriesToHclTerraform(struct?: ChronicleParserChangelogsEntries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleParserChangelogsEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleParserChangelogsEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserChangelogsEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change_message - computed: true, optional: false, required: false
  public get changeMessage() {
    return this.getStringAttribute('change_message');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // parser_version - computed: true, optional: false, required: false
  public get parserVersion() {
    return this.getStringAttribute('parser_version');
  }
}

export class ChronicleParserChangelogsEntriesList extends cdktn.ComplexList {

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
  public get(index: number): ChronicleParserChangelogsEntriesOutputReference {
    return new ChronicleParserChangelogsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleParserChangelogs {
}

export function chronicleParserChangelogsToTerraform(struct?: ChronicleParserChangelogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function chronicleParserChangelogsToHclTerraform(struct?: ChronicleParserChangelogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleParserChangelogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleParserChangelogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserChangelogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entries - computed: true, optional: false, required: false
  private _entries = new ChronicleParserChangelogsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
}

export class ChronicleParserChangelogsList extends cdktn.ComplexList {

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
  public get(index: number): ChronicleParserChangelogsOutputReference {
    return new ChronicleParserChangelogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleParserCreator {
}

export function chronicleParserCreatorToTerraform(struct?: ChronicleParserCreator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function chronicleParserCreatorToHclTerraform(struct?: ChronicleParserCreator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ChronicleParserCreatorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleParserCreator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserCreator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // customer - computed: true, optional: false, required: false
  public get customer() {
    return this.getStringAttribute('customer');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class ChronicleParserCreatorList extends cdktn.ComplexList {

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
  public get(index: number): ChronicleParserCreatorOutputReference {
    return new ChronicleParserCreatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleParserLowCodeFieldExtractorsExtractors {
  /**
  * Path in generated event which is to be populated. This is required if the
  * FieldExtractor is used to specify the parser extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#destination_path ChronicleParser#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Field path could be a json path, xml path or csv column name
  * depending on log format. It refers to a section or substring in raw log.
  * This is required if the FieldExtractor is used to specify the parser
  * extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#field_path ChronicleParser#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Operator used for precondition.
  * Possible values:
  * EQUALS
  * NOT_EQUALS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#precondition_op ChronicleParser#precondition_op}
  */
  readonly preconditionOp?: string;
  /**
  * Precondition path could be a json path, xml path or csv column name
  * depending on log format. It refers to a section or substring in raw log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#precondition_path ChronicleParser#precondition_path}
  */
  readonly preconditionPath?: string;
  /**
  * Precondition value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#precondition_value ChronicleParser#precondition_value}
  */
  readonly preconditionValue?: string;
  /**
  * Value to be mapped to the destination path directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#value ChronicleParser#value}
  */
  readonly value?: string;
}

export function chronicleParserLowCodeFieldExtractorsExtractorsToTerraform(struct?: ChronicleParserLowCodeFieldExtractorsExtractors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_path: cdktn.stringToTerraform(struct!.destinationPath),
    field_path: cdktn.stringToTerraform(struct!.fieldPath),
    precondition_op: cdktn.stringToTerraform(struct!.preconditionOp),
    precondition_path: cdktn.stringToTerraform(struct!.preconditionPath),
    precondition_value: cdktn.stringToTerraform(struct!.preconditionValue),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function chronicleParserLowCodeFieldExtractorsExtractorsToHclTerraform(struct?: ChronicleParserLowCodeFieldExtractorsExtractors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_path: {
      value: cdktn.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktn.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precondition_op: {
      value: cdktn.stringToHclTerraform(struct!.preconditionOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precondition_path: {
      value: cdktn.stringToHclTerraform(struct!.preconditionPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precondition_value: {
      value: cdktn.stringToHclTerraform(struct!.preconditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleParserLowCodeFieldExtractorsExtractors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._preconditionOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditionOp = this._preconditionOp;
    }
    if (this._preconditionPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditionPath = this._preconditionPath;
    }
    if (this._preconditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditionValue = this._preconditionValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserLowCodeFieldExtractorsExtractors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPath = undefined;
      this._fieldPath = undefined;
      this._preconditionOp = undefined;
      this._preconditionPath = undefined;
      this._preconditionValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPath = value.destinationPath;
      this._fieldPath = value.fieldPath;
      this._preconditionOp = value.preconditionOp;
      this._preconditionPath = value.preconditionPath;
      this._preconditionValue = value.preconditionValue;
      this._value = value.value;
    }
  }

  // destination_path - computed: false, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // precondition_op - computed: false, optional: true, required: false
  private _preconditionOp?: string; 
  public get preconditionOp() {
    return this.getStringAttribute('precondition_op');
  }
  public set preconditionOp(value: string) {
    this._preconditionOp = value;
  }
  public resetPreconditionOp() {
    this._preconditionOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionOpInput() {
    return this._preconditionOp;
  }

  // precondition_path - computed: false, optional: true, required: false
  private _preconditionPath?: string; 
  public get preconditionPath() {
    return this.getStringAttribute('precondition_path');
  }
  public set preconditionPath(value: string) {
    this._preconditionPath = value;
  }
  public resetPreconditionPath() {
    this._preconditionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionPathInput() {
    return this._preconditionPath;
  }

  // precondition_value - computed: false, optional: true, required: false
  private _preconditionValue?: string; 
  public get preconditionValue() {
    return this.getStringAttribute('precondition_value');
  }
  public set preconditionValue(value: string) {
    this._preconditionValue = value;
  }
  public resetPreconditionValue() {
    this._preconditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionValueInput() {
    return this._preconditionValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ChronicleParserLowCodeFieldExtractorsExtractorsList extends cdktn.ComplexList {
  public internalValue? : ChronicleParserLowCodeFieldExtractorsExtractors[] | cdktn.IResolvable

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
  public get(index: number): ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference {
    return new ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleParserLowCodeFieldExtractorsPreprocessConfig {
  /**
  * GROK Regex to extract the structured part of the log.
  * syntax documentation:
  * www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#grok_regex ChronicleParser#grok_regex}
  */
  readonly grokRegex?: string;
  /**
  * Target field name for the structured part of the log.
  * This should match a SEMANTIC identifier from the grok expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#target ChronicleParser#target}
  */
  readonly target?: string;
}

export function chronicleParserLowCodeFieldExtractorsPreprocessConfigToTerraform(struct?: ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference | ChronicleParserLowCodeFieldExtractorsPreprocessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grok_regex: cdktn.stringToTerraform(struct!.grokRegex),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function chronicleParserLowCodeFieldExtractorsPreprocessConfigToHclTerraform(struct?: ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference | ChronicleParserLowCodeFieldExtractorsPreprocessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grok_regex: {
      value: cdktn.stringToHclTerraform(struct!.grokRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleParserLowCodeFieldExtractorsPreprocessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grokRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokRegex = this._grokRegex;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserLowCodeFieldExtractorsPreprocessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grokRegex = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grokRegex = value.grokRegex;
      this._target = value.target;
    }
  }

  // grok_regex - computed: false, optional: true, required: false
  private _grokRegex?: string; 
  public get grokRegex() {
    return this.getStringAttribute('grok_regex');
  }
  public set grokRegex(value: string) {
    this._grokRegex = value;
  }
  public resetGrokRegex() {
    this._grokRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokRegexInput() {
    return this._grokRegex;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface ChronicleParserLowCodeFieldExtractors {
  /**
  * Whether to append repeated fields or not.
  * When false, repeated fields will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#append_repeated_fields ChronicleParser#append_repeated_fields}
  */
  readonly appendRepeatedFields?: boolean | cdktn.IResolvable;
  /**
  * Possible values:
  * JSON
  * CSV
  * XML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#log_format ChronicleParser#log_format}
  */
  readonly logFormat?: string;
  /**
  * extractors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#extractors ChronicleParser#extractors}
  */
  readonly extractors?: ChronicleParserLowCodeFieldExtractorsExtractors[] | cdktn.IResolvable;
  /**
  * preprocess_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#preprocess_config ChronicleParser#preprocess_config}
  */
  readonly preprocessConfig?: ChronicleParserLowCodeFieldExtractorsPreprocessConfig;
}

export function chronicleParserLowCodeFieldExtractorsToTerraform(struct?: ChronicleParserLowCodeFieldExtractorsOutputReference | ChronicleParserLowCodeFieldExtractors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_repeated_fields: cdktn.booleanToTerraform(struct!.appendRepeatedFields),
    log_format: cdktn.stringToTerraform(struct!.logFormat),
    extractors: cdktn.listMapper(chronicleParserLowCodeFieldExtractorsExtractorsToTerraform, true)(struct!.extractors),
    preprocess_config: chronicleParserLowCodeFieldExtractorsPreprocessConfigToTerraform(struct!.preprocessConfig),
  }
}


export function chronicleParserLowCodeFieldExtractorsToHclTerraform(struct?: ChronicleParserLowCodeFieldExtractorsOutputReference | ChronicleParserLowCodeFieldExtractors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_repeated_fields: {
      value: cdktn.booleanToHclTerraform(struct!.appendRepeatedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_format: {
      value: cdktn.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractors: {
      value: cdktn.listMapperHcl(chronicleParserLowCodeFieldExtractorsExtractorsToHclTerraform, true)(struct!.extractors),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleParserLowCodeFieldExtractorsExtractorsList",
    },
    preprocess_config: {
      value: chronicleParserLowCodeFieldExtractorsPreprocessConfigToHclTerraform(struct!.preprocessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleParserLowCodeFieldExtractorsPreprocessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserLowCodeFieldExtractorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleParserLowCodeFieldExtractors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendRepeatedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendRepeatedFields = this._appendRepeatedFields;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._preprocessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocessConfig = this._preprocessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserLowCodeFieldExtractors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appendRepeatedFields = undefined;
      this._logFormat = undefined;
      this._extractors.internalValue = undefined;
      this._preprocessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appendRepeatedFields = value.appendRepeatedFields;
      this._logFormat = value.logFormat;
      this._extractors.internalValue = value.extractors;
      this._preprocessConfig.internalValue = value.preprocessConfig;
    }
  }

  // append_repeated_fields - computed: false, optional: true, required: false
  private _appendRepeatedFields?: boolean | cdktn.IResolvable; 
  public get appendRepeatedFields() {
    return this.getBooleanAttribute('append_repeated_fields');
  }
  public set appendRepeatedFields(value: boolean | cdktn.IResolvable) {
    this._appendRepeatedFields = value;
  }
  public resetAppendRepeatedFields() {
    this._appendRepeatedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendRepeatedFieldsInput() {
    return this._appendRepeatedFields;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // transformed_cbn_snippet - computed: true, optional: false, required: false
  public get transformedCbnSnippet() {
    return this.getStringAttribute('transformed_cbn_snippet');
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new ChronicleParserLowCodeFieldExtractorsExtractorsList(this, "extractors", false);
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: ChronicleParserLowCodeFieldExtractorsExtractors[] | cdktn.IResolvable) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // preprocess_config - computed: false, optional: true, required: false
  private _preprocessConfig = new ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference(this, "preprocess_config");
  public get preprocessConfig() {
    return this._preprocessConfig;
  }
  public putPreprocessConfig(value: ChronicleParserLowCodeFieldExtractorsPreprocessConfig) {
    this._preprocessConfig.internalValue = value;
  }
  public resetPreprocessConfig() {
    this._preprocessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessConfigInput() {
    return this._preprocessConfig.internalValue;
  }
}
export interface ChronicleParserLowCode {
  /**
  * The log used to create this low code parser in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#log ChronicleParser#log}
  */
  readonly log?: string;
  /**
  * field_extractors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#field_extractors ChronicleParser#field_extractors}
  */
  readonly fieldExtractors?: ChronicleParserLowCodeFieldExtractors;
}

export function chronicleParserLowCodeToTerraform(struct?: ChronicleParserLowCodeOutputReference | ChronicleParserLowCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log: cdktn.stringToTerraform(struct!.log),
    field_extractors: chronicleParserLowCodeFieldExtractorsToTerraform(struct!.fieldExtractors),
  }
}


export function chronicleParserLowCodeToHclTerraform(struct?: ChronicleParserLowCodeOutputReference | ChronicleParserLowCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log: {
      value: cdktn.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_extractors: {
      value: chronicleParserLowCodeFieldExtractorsToHclTerraform(struct!.fieldExtractors),
      isBlock: true,
      type: "list",
      storageClassType: "ChronicleParserLowCodeFieldExtractorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserLowCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleParserLowCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._fieldExtractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtractors = this._fieldExtractors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserLowCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._fieldExtractors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._fieldExtractors.internalValue = value.fieldExtractors;
    }
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // field_extractors - computed: false, optional: true, required: false
  private _fieldExtractors = new ChronicleParserLowCodeFieldExtractorsOutputReference(this, "field_extractors");
  public get fieldExtractors() {
    return this._fieldExtractors;
  }
  public putFieldExtractors(value: ChronicleParserLowCodeFieldExtractors) {
    this._fieldExtractors.internalValue = value;
  }
  public resetFieldExtractors() {
    this._fieldExtractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractorsInput() {
    return this._fieldExtractors.internalValue;
  }
}
export interface ChronicleParserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#create ChronicleParser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#update ChronicleParser#update}
  */
  readonly update?: string;
}

export function chronicleParserTimeoutsToTerraform(struct?: ChronicleParserTimeouts | cdktn.IResolvable): any {
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


export function chronicleParserTimeoutsToHclTerraform(struct?: ChronicleParserTimeouts | cdktn.IResolvable): any {
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

export class ChronicleParserTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleParserTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleParserTimeouts | cdktn.IResolvable | undefined) {
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
export interface ChronicleParserVersionInfo {
  /**
  * Signifies if the parser is disabled for auto upgrade. If true, the parser
  * will not be upgraded by the auto upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#auto_upgrade_disabled ChronicleParser#auto_upgrade_disabled}
  */
  readonly autoUpgradeDisabled: boolean | cdktn.IResolvable;
}

export function chronicleParserVersionInfoToTerraform(struct?: ChronicleParserVersionInfoOutputReference | ChronicleParserVersionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_upgrade_disabled: cdktn.booleanToTerraform(struct!.autoUpgradeDisabled),
  }
}


export function chronicleParserVersionInfoToHclTerraform(struct?: ChronicleParserVersionInfoOutputReference | ChronicleParserVersionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_upgrade_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoUpgradeDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleParserVersionInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleParserVersionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgradeDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeDisabled = this._autoUpgradeDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleParserVersionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpgradeDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpgradeDisabled = value.autoUpgradeDisabled;
    }
  }

  // auto_upgrade_disabled - computed: false, optional: false, required: true
  private _autoUpgradeDisabled?: boolean | cdktn.IResolvable; 
  public get autoUpgradeDisabled() {
    return this.getBooleanAttribute('auto_upgrade_disabled');
  }
  public set autoUpgradeDisabled(value: boolean | cdktn.IResolvable) {
    this._autoUpgradeDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeDisabledInput() {
    return this._autoUpgradeDisabled;
  }

  // latest_parser - computed: true, optional: false, required: false
  public get latestParser() {
    return this.getStringAttribute('latest_parser');
  }

  // latest_parser_version - computed: true, optional: false, required: false
  public get latestParserVersion() {
    return this.getStringAttribute('latest_parser_version');
  }

  // rollback_available - computed: true, optional: false, required: false
  public get rollbackAvailable() {
    return this.getBooleanAttribute('rollback_available');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser google_chronicle_parser}
*/
export class ChronicleParser extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_parser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleParser resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleParser to import
  * @param importFromId The id of the existing ChronicleParser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleParser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_parser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/chronicle_parser google_chronicle_parser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleParserConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleParserConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_parser',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.39.0',
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
    this._cbn = config.cbn;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._logtype = config.logtype;
    this._project = config.project;
    this._validatedOnEmptyLogs = config.validatedOnEmptyLogs;
    this._validationSkipped = config.validationSkipped;
    this._lowCode.internalValue = config.lowCode;
    this._timeouts.internalValue = config.timeouts;
    this._versionInfo.internalValue = config.versionInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cbn - computed: false, optional: true, required: false
  private _cbn?: string; 
  public get cbn() {
    return this.getStringAttribute('cbn');
  }
  public set cbn(value: string) {
    this._cbn = value;
  }
  public resetCbn() {
    this._cbn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbnInput() {
    return this._cbn;
  }

  // changelogs - computed: true, optional: false, required: false
  private _changelogs = new ChronicleParserChangelogsList(this, "changelogs", false);
  public get changelogs() {
    return this._changelogs;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new ChronicleParserCreatorList(this, "creator", false);
  public get creator() {
    return this._creator;
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

  // dynamic_parsing_config - computed: true, optional: false, required: false
  public get dynamicParsingConfig() {
    return this.getStringAttribute('dynamic_parsing_config');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // logtype - computed: false, optional: false, required: true
  private _logtype?: string; 
  public get logtype() {
    return this.getStringAttribute('logtype');
  }
  public set logtype(value: string) {
    this._logtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logtypeInput() {
    return this._logtype;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parser - computed: true, optional: false, required: false
  public get parser() {
    return this.getStringAttribute('parser');
  }

  // parser_extension - computed: true, optional: false, required: false
  public get parserExtension() {
    return this.getStringAttribute('parser_extension');
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

  // release_stage - computed: true, optional: false, required: false
  public get releaseStage() {
    return this.getStringAttribute('release_stage');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validated_on_empty_logs - computed: false, optional: true, required: false
  private _validatedOnEmptyLogs?: boolean | cdktn.IResolvable; 
  public get validatedOnEmptyLogs() {
    return this.getBooleanAttribute('validated_on_empty_logs');
  }
  public set validatedOnEmptyLogs(value: boolean | cdktn.IResolvable) {
    this._validatedOnEmptyLogs = value;
  }
  public resetValidatedOnEmptyLogs() {
    this._validatedOnEmptyLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatedOnEmptyLogsInput() {
    return this._validatedOnEmptyLogs;
  }

  // validation_report - computed: true, optional: false, required: false
  public get validationReport() {
    return this.getStringAttribute('validation_report');
  }

  // validation_skipped - computed: false, optional: true, required: false
  private _validationSkipped?: boolean | cdktn.IResolvable; 
  public get validationSkipped() {
    return this.getBooleanAttribute('validation_skipped');
  }
  public set validationSkipped(value: boolean | cdktn.IResolvable) {
    this._validationSkipped = value;
  }
  public resetValidationSkipped() {
    this._validationSkipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationSkippedInput() {
    return this._validationSkipped;
  }

  // validation_stage - computed: true, optional: false, required: false
  public get validationStage() {
    return this.getStringAttribute('validation_stage');
  }

  // low_code - computed: false, optional: true, required: false
  private _lowCode = new ChronicleParserLowCodeOutputReference(this, "low_code");
  public get lowCode() {
    return this._lowCode;
  }
  public putLowCode(value: ChronicleParserLowCode) {
    this._lowCode.internalValue = value;
  }
  public resetLowCode() {
    this._lowCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowCodeInput() {
    return this._lowCode.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleParserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleParserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // version_info - computed: false, optional: true, required: false
  private _versionInfo = new ChronicleParserVersionInfoOutputReference(this, "version_info");
  public get versionInfo() {
    return this._versionInfo;
  }
  public putVersionInfo(value: ChronicleParserVersionInfo) {
    this._versionInfo.internalValue = value;
  }
  public resetVersionInfo() {
    this._versionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInfoInput() {
    return this._versionInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cbn: cdktn.stringToTerraform(this._cbn),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      logtype: cdktn.stringToTerraform(this._logtype),
      project: cdktn.stringToTerraform(this._project),
      validated_on_empty_logs: cdktn.booleanToTerraform(this._validatedOnEmptyLogs),
      validation_skipped: cdktn.booleanToTerraform(this._validationSkipped),
      low_code: chronicleParserLowCodeToTerraform(this._lowCode.internalValue),
      timeouts: chronicleParserTimeoutsToTerraform(this._timeouts.internalValue),
      version_info: chronicleParserVersionInfoToTerraform(this._versionInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cbn: {
        value: cdktn.stringToHclTerraform(this._cbn),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
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
      logtype: {
        value: cdktn.stringToHclTerraform(this._logtype),
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
      validated_on_empty_logs: {
        value: cdktn.booleanToHclTerraform(this._validatedOnEmptyLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validation_skipped: {
        value: cdktn.booleanToHclTerraform(this._validationSkipped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      low_code: {
        value: chronicleParserLowCodeToHclTerraform(this._lowCode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleParserLowCodeList",
      },
      timeouts: {
        value: chronicleParserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleParserTimeouts",
      },
      version_info: {
        value: chronicleParserVersionInfoToHclTerraform(this._versionInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleParserVersionInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
