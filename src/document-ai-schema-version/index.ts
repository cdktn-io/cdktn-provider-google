/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DocumentAiSchemaVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#deletion_policy DocumentAiSchemaVersion#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The user-defined name of the SchemaVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Google Cloud labels for the SchemaVersion.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#labels DocumentAiSchemaVersion#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#location DocumentAiSchemaVersion#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}
  */
  readonly project?: string;
  /**
  * The schema id that this schema version belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#schema_id DocumentAiSchemaVersion#schema_id}
  */
  readonly schemaId: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#schema DocumentAiSchemaVersion#schema}
  */
  readonly schema: DocumentAiSchemaVersionSchema;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#timeouts DocumentAiSchemaVersion#timeouts}
  */
  readonly timeouts?: DocumentAiSchemaVersionTimeouts;
}
export interface DocumentAiSchemaVersionSchemaEntityTypesEnumValues {
  /**
  * The individual values that this enum values type can include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#values DocumentAiSchemaVersion#values}
  */
  readonly values?: string[];
}

export function documentAiSchemaVersionSchemaEntityTypesEnumValuesToTerraform(struct?: DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference | DocumentAiSchemaVersionSchemaEntityTypesEnumValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function documentAiSchemaVersionSchemaEntityTypesEnumValuesToHclTerraform(struct?: DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference | DocumentAiSchemaVersionSchemaEntityTypesEnumValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiSchemaVersionSchemaEntityTypesEnumValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiSchemaVersionSchemaEntityTypesEnumValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DocumentAiSchemaVersionSchemaEntityTypesProperties {
  /**
  * User defined name for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}
  */
  readonly displayName?: string;
  /**
  * Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#method DocumentAiSchemaVersion#method}
  */
  readonly method?: string;
  /**
  * The name of the property. Follows the same guidelines as the EntityType name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}
  */
  readonly name: string;
  /**
  * Occurrence type limits the number of instances an entity type appears in the document. Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#occurrence_type DocumentAiSchemaVersion#occurrence_type}
  */
  readonly occurrenceType?: string;
  /**
  * A reference to the value type of the property. This type is subject to the same conventions as the 'Entity.base_types' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#value_type DocumentAiSchemaVersion#value_type}
  */
  readonly valueType: string;
}

export function documentAiSchemaVersionSchemaEntityTypesPropertiesToTerraform(struct?: DocumentAiSchemaVersionSchemaEntityTypesProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    method: cdktn.stringToTerraform(struct!.method),
    name: cdktn.stringToTerraform(struct!.name),
    occurrence_type: cdktn.stringToTerraform(struct!.occurrenceType),
    value_type: cdktn.stringToTerraform(struct!.valueType),
  }
}


export function documentAiSchemaVersionSchemaEntityTypesPropertiesToHclTerraform(struct?: DocumentAiSchemaVersionSchemaEntityTypesProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    occurrence_type: {
      value: cdktn.stringToHclTerraform(struct!.occurrenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktn.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DocumentAiSchemaVersionSchemaEntityTypesProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._occurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceType = this._occurrenceType;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiSchemaVersionSchemaEntityTypesProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._method = undefined;
      this._name = undefined;
      this._occurrenceType = undefined;
      this._valueType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._method = value.method;
      this._name = value.name;
      this._occurrenceType = value.occurrenceType;
      this._valueType = value.valueType;
    }
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // occurrence_type - computed: false, optional: true, required: false
  private _occurrenceType?: string; 
  public get occurrenceType() {
    return this.getStringAttribute('occurrence_type');
  }
  public set occurrenceType(value: string) {
    this._occurrenceType = value;
  }
  public resetOccurrenceType() {
    this._occurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceTypeInput() {
    return this._occurrenceType;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class DocumentAiSchemaVersionSchemaEntityTypesPropertiesList extends cdktn.ComplexList {
  public internalValue? : DocumentAiSchemaVersionSchemaEntityTypesProperties[] | cdktn.IResolvable

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
  public get(index: number): DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference {
    return new DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DocumentAiSchemaVersionSchemaEntityTypes {
  /**
  * The entity type that this type is derived from. For now, one and only one should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#base_types DocumentAiSchemaVersion#base_types}
  */
  readonly baseTypes?: string[];
  /**
  * User defined name for the type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}
  */
  readonly displayName?: string;
  /**
  * Name of the type. It must be unique within the schema file and cannot be a "Common Type".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}
  */
  readonly name: string;
  /**
  * enum_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#enum_values DocumentAiSchemaVersion#enum_values}
  */
  readonly enumValues?: DocumentAiSchemaVersionSchemaEntityTypesEnumValues;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#properties DocumentAiSchemaVersion#properties}
  */
  readonly properties?: DocumentAiSchemaVersionSchemaEntityTypesProperties[] | cdktn.IResolvable;
}

export function documentAiSchemaVersionSchemaEntityTypesToTerraform(struct?: DocumentAiSchemaVersionSchemaEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.baseTypes),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    name: cdktn.stringToTerraform(struct!.name),
    enum_values: documentAiSchemaVersionSchemaEntityTypesEnumValuesToTerraform(struct!.enumValues),
    properties: cdktn.listMapper(documentAiSchemaVersionSchemaEntityTypesPropertiesToTerraform, true)(struct!.properties),
  }
}


export function documentAiSchemaVersionSchemaEntityTypesToHclTerraform(struct?: DocumentAiSchemaVersionSchemaEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.baseTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum_values: {
      value: documentAiSchemaVersionSchemaEntityTypesEnumValuesToHclTerraform(struct!.enumValues),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiSchemaVersionSchemaEntityTypesEnumValuesList",
    },
    properties: {
      value: cdktn.listMapperHcl(documentAiSchemaVersionSchemaEntityTypesPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiSchemaVersionSchemaEntityTypesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiSchemaVersionSchemaEntityTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DocumentAiSchemaVersionSchemaEntityTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseTypes = this._baseTypes;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._enumValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumValues = this._enumValues?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiSchemaVersionSchemaEntityTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseTypes = undefined;
      this._displayName = undefined;
      this._name = undefined;
      this._enumValues.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseTypes = value.baseTypes;
      this._displayName = value.displayName;
      this._name = value.name;
      this._enumValues.internalValue = value.enumValues;
      this._properties.internalValue = value.properties;
    }
  }

  // base_types - computed: false, optional: true, required: false
  private _baseTypes?: string[]; 
  public get baseTypes() {
    return this.getListAttribute('base_types');
  }
  public set baseTypes(value: string[]) {
    this._baseTypes = value;
  }
  public resetBaseTypes() {
    this._baseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseTypesInput() {
    return this._baseTypes;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // enum_values - computed: false, optional: true, required: false
  private _enumValues = new DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(this, "enum_values");
  public get enumValues() {
    return this._enumValues;
  }
  public putEnumValues(value: DocumentAiSchemaVersionSchemaEntityTypesEnumValues) {
    this._enumValues.internalValue = value;
  }
  public resetEnumValues() {
    this._enumValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumValuesInput() {
    return this._enumValues.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DocumentAiSchemaVersionSchemaEntityTypesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DocumentAiSchemaVersionSchemaEntityTypesProperties[] | cdktn.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class DocumentAiSchemaVersionSchemaEntityTypesList extends cdktn.ComplexList {
  public internalValue? : DocumentAiSchemaVersionSchemaEntityTypes[] | cdktn.IResolvable

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
  public get(index: number): DocumentAiSchemaVersionSchemaEntityTypesOutputReference {
    return new DocumentAiSchemaVersionSchemaEntityTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DocumentAiSchemaVersionSchemaMetadata {
  /**
  * If true, on a given page, there can be multiple 'document' annotations covering it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#document_allow_multiple_labels DocumentAiSchemaVersion#document_allow_multiple_labels}
  */
  readonly documentAllowMultipleLabels?: boolean | cdktn.IResolvable;
  /**
  * If true, a 'document' entity type can be applied to subdocument (splitting). Otherwise, it can only be applied to the entire document (classification).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#document_splitter DocumentAiSchemaVersion#document_splitter}
  */
  readonly documentSplitter?: boolean | cdktn.IResolvable;
  /**
  * If set, all the nested entities must be prefixed with the parents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#prefixed_naming_on_properties DocumentAiSchemaVersion#prefixed_naming_on_properties}
  */
  readonly prefixedNamingOnProperties?: boolean | cdktn.IResolvable;
  /**
  * If set, this will skip the naming format validation in the schema. So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#skip_naming_validation DocumentAiSchemaVersion#skip_naming_validation}
  */
  readonly skipNamingValidation?: boolean | cdktn.IResolvable;
}

export function documentAiSchemaVersionSchemaMetadataToTerraform(struct?: DocumentAiSchemaVersionSchemaMetadataOutputReference | DocumentAiSchemaVersionSchemaMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_allow_multiple_labels: cdktn.booleanToTerraform(struct!.documentAllowMultipleLabels),
    document_splitter: cdktn.booleanToTerraform(struct!.documentSplitter),
    prefixed_naming_on_properties: cdktn.booleanToTerraform(struct!.prefixedNamingOnProperties),
    skip_naming_validation: cdktn.booleanToTerraform(struct!.skipNamingValidation),
  }
}


export function documentAiSchemaVersionSchemaMetadataToHclTerraform(struct?: DocumentAiSchemaVersionSchemaMetadataOutputReference | DocumentAiSchemaVersionSchemaMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_allow_multiple_labels: {
      value: cdktn.booleanToHclTerraform(struct!.documentAllowMultipleLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    document_splitter: {
      value: cdktn.booleanToHclTerraform(struct!.documentSplitter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefixed_naming_on_properties: {
      value: cdktn.booleanToHclTerraform(struct!.prefixedNamingOnProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_naming_validation: {
      value: cdktn.booleanToHclTerraform(struct!.skipNamingValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiSchemaVersionSchemaMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiSchemaVersionSchemaMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentAllowMultipleLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentAllowMultipleLabels = this._documentAllowMultipleLabels;
    }
    if (this._documentSplitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentSplitter = this._documentSplitter;
    }
    if (this._prefixedNamingOnProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixedNamingOnProperties = this._prefixedNamingOnProperties;
    }
    if (this._skipNamingValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNamingValidation = this._skipNamingValidation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiSchemaVersionSchemaMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documentAllowMultipleLabels = undefined;
      this._documentSplitter = undefined;
      this._prefixedNamingOnProperties = undefined;
      this._skipNamingValidation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documentAllowMultipleLabels = value.documentAllowMultipleLabels;
      this._documentSplitter = value.documentSplitter;
      this._prefixedNamingOnProperties = value.prefixedNamingOnProperties;
      this._skipNamingValidation = value.skipNamingValidation;
    }
  }

  // document_allow_multiple_labels - computed: false, optional: true, required: false
  private _documentAllowMultipleLabels?: boolean | cdktn.IResolvable; 
  public get documentAllowMultipleLabels() {
    return this.getBooleanAttribute('document_allow_multiple_labels');
  }
  public set documentAllowMultipleLabels(value: boolean | cdktn.IResolvable) {
    this._documentAllowMultipleLabels = value;
  }
  public resetDocumentAllowMultipleLabels() {
    this._documentAllowMultipleLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentAllowMultipleLabelsInput() {
    return this._documentAllowMultipleLabels;
  }

  // document_splitter - computed: false, optional: true, required: false
  private _documentSplitter?: boolean | cdktn.IResolvable; 
  public get documentSplitter() {
    return this.getBooleanAttribute('document_splitter');
  }
  public set documentSplitter(value: boolean | cdktn.IResolvable) {
    this._documentSplitter = value;
  }
  public resetDocumentSplitter() {
    this._documentSplitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentSplitterInput() {
    return this._documentSplitter;
  }

  // prefixed_naming_on_properties - computed: false, optional: true, required: false
  private _prefixedNamingOnProperties?: boolean | cdktn.IResolvable; 
  public get prefixedNamingOnProperties() {
    return this.getBooleanAttribute('prefixed_naming_on_properties');
  }
  public set prefixedNamingOnProperties(value: boolean | cdktn.IResolvable) {
    this._prefixedNamingOnProperties = value;
  }
  public resetPrefixedNamingOnProperties() {
    this._prefixedNamingOnProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixedNamingOnPropertiesInput() {
    return this._prefixedNamingOnProperties;
  }

  // skip_naming_validation - computed: false, optional: true, required: false
  private _skipNamingValidation?: boolean | cdktn.IResolvable; 
  public get skipNamingValidation() {
    return this.getBooleanAttribute('skip_naming_validation');
  }
  public set skipNamingValidation(value: boolean | cdktn.IResolvable) {
    this._skipNamingValidation = value;
  }
  public resetSkipNamingValidation() {
    this._skipNamingValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNamingValidationInput() {
    return this._skipNamingValidation;
  }
}
export interface DocumentAiSchemaVersionSchema {
  /**
  * Description of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#description DocumentAiSchemaVersion#description}
  */
  readonly description?: string;
  /**
  * Display name to show users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}
  */
  readonly displayName?: string;
  /**
  * Document-level prompt provided by the user. This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#document_prompt DocumentAiSchemaVersion#document_prompt}
  */
  readonly documentPrompt?: string;
  /**
  * entity_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#entity_types DocumentAiSchemaVersion#entity_types}
  */
  readonly entityTypes?: DocumentAiSchemaVersionSchemaEntityTypes[] | cdktn.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#metadata DocumentAiSchemaVersion#metadata}
  */
  readonly metadata?: DocumentAiSchemaVersionSchemaMetadata;
}

export function documentAiSchemaVersionSchemaToTerraform(struct?: DocumentAiSchemaVersionSchemaOutputReference | DocumentAiSchemaVersionSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    document_prompt: cdktn.stringToTerraform(struct!.documentPrompt),
    entity_types: cdktn.listMapper(documentAiSchemaVersionSchemaEntityTypesToTerraform, true)(struct!.entityTypes),
    metadata: documentAiSchemaVersionSchemaMetadataToTerraform(struct!.metadata),
  }
}


export function documentAiSchemaVersionSchemaToHclTerraform(struct?: DocumentAiSchemaVersionSchemaOutputReference | DocumentAiSchemaVersionSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_prompt: {
      value: cdktn.stringToHclTerraform(struct!.documentPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_types: {
      value: cdktn.listMapperHcl(documentAiSchemaVersionSchemaEntityTypesToHclTerraform, true)(struct!.entityTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiSchemaVersionSchemaEntityTypesList",
    },
    metadata: {
      value: documentAiSchemaVersionSchemaMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiSchemaVersionSchemaMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiSchemaVersionSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiSchemaVersionSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._documentPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentPrompt = this._documentPrompt;
    }
    if (this._entityTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTypes = this._entityTypes?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiSchemaVersionSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._documentPrompt = undefined;
      this._entityTypes.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._documentPrompt = value.documentPrompt;
      this._entityTypes.internalValue = value.entityTypes;
      this._metadata.internalValue = value.metadata;
    }
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

  // document_prompt - computed: false, optional: true, required: false
  private _documentPrompt?: string; 
  public get documentPrompt() {
    return this.getStringAttribute('document_prompt');
  }
  public set documentPrompt(value: string) {
    this._documentPrompt = value;
  }
  public resetDocumentPrompt() {
    this._documentPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentPromptInput() {
    return this._documentPrompt;
  }

  // entity_types - computed: false, optional: true, required: false
  private _entityTypes = new DocumentAiSchemaVersionSchemaEntityTypesList(this, "entity_types", false);
  public get entityTypes() {
    return this._entityTypes;
  }
  public putEntityTypes(value: DocumentAiSchemaVersionSchemaEntityTypes[] | cdktn.IResolvable) {
    this._entityTypes.internalValue = value;
  }
  public resetEntityTypes() {
    this._entityTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DocumentAiSchemaVersionSchemaMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DocumentAiSchemaVersionSchemaMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DocumentAiSchemaVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}
  */
  readonly update?: string;
}

export function documentAiSchemaVersionTimeoutsToTerraform(struct?: DocumentAiSchemaVersionTimeouts | cdktn.IResolvable): any {
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


export function documentAiSchemaVersionTimeoutsToHclTerraform(struct?: DocumentAiSchemaVersionTimeouts | cdktn.IResolvable): any {
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

export class DocumentAiSchemaVersionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DocumentAiSchemaVersionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DocumentAiSchemaVersionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version google_document_ai_schema_version}
*/
export class DocumentAiSchemaVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_document_ai_schema_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DocumentAiSchemaVersion to import
  * @param importFromId The id of the existing DocumentAiSchemaVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DocumentAiSchemaVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_document_ai_schema_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.8.1/docs/resources/document_ai_schema_version google_document_ai_schema_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocumentAiSchemaVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DocumentAiSchemaVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_document_ai_schema_version',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.8.1',
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
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._schemaId = config.schemaId;
    this._schema.internalValue = config.schema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new DocumentAiSchemaVersionSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DocumentAiSchemaVersionSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DocumentAiSchemaVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DocumentAiSchemaVersionTimeouts) {
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
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      schema_id: cdktn.stringToTerraform(this._schemaId),
      schema: documentAiSchemaVersionSchemaToTerraform(this._schema.internalValue),
      timeouts: documentAiSchemaVersionTimeoutsToTerraform(this._timeouts.internalValue),
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
      schema_id: {
        value: cdktn.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: documentAiSchemaVersionSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DocumentAiSchemaVersionSchemaList",
      },
      timeouts: {
        value: documentAiSchemaVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DocumentAiSchemaVersionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
