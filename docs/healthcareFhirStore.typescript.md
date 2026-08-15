# `healthcareFhirStore` Submodule <a name="`healthcareFhirStore` Submodule" id="@cdktn/provider-google.healthcareFhirStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirStore <a name="HealthcareFhirStore" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store google_healthcare_fhir_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStore(scope: Construct, id: string, config: HealthcareFhirStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig">HealthcareFhirStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig">HealthcareFhirStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfigs">putNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs">putStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putValidationConfig">putValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetComplexDataTypeReferenceParsing">resetComplexDataTypeReferenceParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDefaultSearchHandlingStrict">resetDefaultSearchHandlingStrict</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableReferentialIntegrity">resetDisableReferentialIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableResourceVersioning">resetDisableResourceVersioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableHistoryImport">resetEnableHistoryImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableUpdateCreate">resetEnableUpdateCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfigs">resetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetStreamConfigs">resetStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetValidationConfig">resetValidationConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig"></a>

```typescript
public putNotificationConfig(value: HealthcareFhirStoreNotificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---

##### `putNotificationConfigs` <a name="putNotificationConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfigs"></a>

```typescript
public putNotificationConfigs(value: IResolvable | HealthcareFhirStoreNotificationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putNotificationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>[]

---

##### `putStreamConfigs` <a name="putStreamConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs"></a>

```typescript
public putStreamConfigs(value: IResolvable | HealthcareFhirStoreStreamConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putStreamConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareFhirStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

---

##### `putValidationConfig` <a name="putValidationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putValidationConfig"></a>

```typescript
public putValidationConfig(value: HealthcareFhirStoreValidationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.putValidationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig">HealthcareFhirStoreValidationConfig</a>

---

##### `resetComplexDataTypeReferenceParsing` <a name="resetComplexDataTypeReferenceParsing" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetComplexDataTypeReferenceParsing"></a>

```typescript
public resetComplexDataTypeReferenceParsing(): void
```

##### `resetDefaultSearchHandlingStrict` <a name="resetDefaultSearchHandlingStrict" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDefaultSearchHandlingStrict"></a>

```typescript
public resetDefaultSearchHandlingStrict(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisableReferentialIntegrity` <a name="resetDisableReferentialIntegrity" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableReferentialIntegrity"></a>

```typescript
public resetDisableReferentialIntegrity(): void
```

##### `resetDisableResourceVersioning` <a name="resetDisableResourceVersioning" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetDisableResourceVersioning"></a>

```typescript
public resetDisableResourceVersioning(): void
```

##### `resetEnableHistoryImport` <a name="resetEnableHistoryImport" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableHistoryImport"></a>

```typescript
public resetEnableHistoryImport(): void
```

##### `resetEnableUpdateCreate` <a name="resetEnableUpdateCreate" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetEnableUpdateCreate"></a>

```typescript
public resetEnableUpdateCreate(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfig"></a>

```typescript
public resetNotificationConfig(): void
```

##### `resetNotificationConfigs` <a name="resetNotificationConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetNotificationConfigs"></a>

```typescript
public resetNotificationConfigs(): void
```

##### `resetStreamConfigs` <a name="resetStreamConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetStreamConfigs"></a>

```typescript
public resetStreamConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidationConfig` <a name="resetValidationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.resetValidationConfig"></a>

```typescript
public resetValidationConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthcareFhirStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

healthcareFhirStore.HealthcareFhirStore.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

healthcareFhirStore.HealthcareFhirStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

healthcareFhirStore.HealthcareFhirStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

healthcareFhirStore.HealthcareFhirStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HealthcareFhirStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareFhirStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareFhirStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthcareFhirStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference">HealthcareFhirStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigs">notificationConfigs</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList">HealthcareFhirStoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigs">streamConfigs</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList">HealthcareFhirStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference">HealthcareFhirStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.validationConfig">validationConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference">HealthcareFhirStoreValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsingInput">complexDataTypeReferenceParsingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrictInput">defaultSearchHandlingStrictInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrityInput">disableReferentialIntegrityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioningInput">disableResourceVersioningInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImportInput">enableHistoryImportInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreateInput">enableUpdateCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigsInput">notificationConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigsInput">streamConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.validationConfigInput">validationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig">HealthcareFhirStoreValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImport">enableHistoryImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: HealthcareFhirStoreNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference">HealthcareFhirStoreNotificationConfigOutputReference</a>

---

##### `notificationConfigs`<sup>Required</sup> <a name="notificationConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigs"></a>

```typescript
public readonly notificationConfigs: HealthcareFhirStoreNotificationConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList">HealthcareFhirStoreNotificationConfigsList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `streamConfigs`<sup>Required</sup> <a name="streamConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigs"></a>

```typescript
public readonly streamConfigs: HealthcareFhirStoreStreamConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList">HealthcareFhirStoreStreamConfigsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareFhirStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference">HealthcareFhirStoreTimeoutsOutputReference</a>

---

##### `validationConfig`<sup>Required</sup> <a name="validationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.validationConfig"></a>

```typescript
public readonly validationConfig: HealthcareFhirStoreValidationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference">HealthcareFhirStoreValidationConfigOutputReference</a>

---

##### `complexDataTypeReferenceParsingInput`<sup>Optional</sup> <a name="complexDataTypeReferenceParsingInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsingInput"></a>

```typescript
public readonly complexDataTypeReferenceParsingInput: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `defaultSearchHandlingStrictInput`<sup>Optional</sup> <a name="defaultSearchHandlingStrictInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrictInput"></a>

```typescript
public readonly defaultSearchHandlingStrictInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `disableReferentialIntegrityInput`<sup>Optional</sup> <a name="disableReferentialIntegrityInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrityInput"></a>

```typescript
public readonly disableReferentialIntegrityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableResourceVersioningInput`<sup>Optional</sup> <a name="disableResourceVersioningInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioningInput"></a>

```typescript
public readonly disableResourceVersioningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableHistoryImportInput`<sup>Optional</sup> <a name="enableHistoryImportInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImportInput"></a>

```typescript
public readonly enableHistoryImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableUpdateCreateInput`<sup>Optional</sup> <a name="enableUpdateCreateInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreateInput"></a>

```typescript
public readonly enableUpdateCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigInput"></a>

```typescript
public readonly notificationConfigInput: HealthcareFhirStoreNotificationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---

##### `notificationConfigsInput`<sup>Optional</sup> <a name="notificationConfigsInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.notificationConfigsInput"></a>

```typescript
public readonly notificationConfigsInput: IResolvable | HealthcareFhirStoreNotificationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>[]

---

##### `streamConfigsInput`<sup>Optional</sup> <a name="streamConfigsInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.streamConfigsInput"></a>

```typescript
public readonly streamConfigsInput: IResolvable | HealthcareFhirStoreStreamConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareFhirStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

---

##### `validationConfigInput`<sup>Optional</sup> <a name="validationConfigInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.validationConfigInput"></a>

```typescript
public readonly validationConfigInput: HealthcareFhirStoreValidationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig">HealthcareFhirStoreValidationConfig</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `complexDataTypeReferenceParsing`<sup>Required</sup> <a name="complexDataTypeReferenceParsing" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.complexDataTypeReferenceParsing"></a>

```typescript
public readonly complexDataTypeReferenceParsing: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `defaultSearchHandlingStrict`<sup>Required</sup> <a name="defaultSearchHandlingStrict" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.defaultSearchHandlingStrict"></a>

```typescript
public readonly defaultSearchHandlingStrict: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `disableReferentialIntegrity`<sup>Required</sup> <a name="disableReferentialIntegrity" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableReferentialIntegrity"></a>

```typescript
public readonly disableReferentialIntegrity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableResourceVersioning`<sup>Required</sup> <a name="disableResourceVersioning" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.disableResourceVersioning"></a>

```typescript
public readonly disableResourceVersioning: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableHistoryImport`<sup>Required</sup> <a name="enableHistoryImport" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableHistoryImport"></a>

```typescript
public readonly enableHistoryImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableUpdateCreate`<sup>Required</sup> <a name="enableUpdateCreate" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.enableUpdateCreate"></a>

```typescript
public readonly enableUpdateCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirStoreConfig <a name="HealthcareFhirStoreConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreConfig: healthcareFhirStore.HealthcareFhirStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dataset">dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.name">name</a></code> | <code>string</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.version">version</a></code> | <code>string</code> | The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"]. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>string</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableHistoryImport">enableHistoryImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfigs">notificationConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>[]</code> | notification_configs block. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.streamConfigs">streamConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>[]</code> | stream_configs block. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.validationConfig">validationConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig">HealthcareFhirStoreValidationConfig</a></code> | validation_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#dataset HealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#name HealthcareFhirStore#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#version HealthcareFhirStore#version}

---

##### `complexDataTypeReferenceParsing`<sup>Optional</sup> <a name="complexDataTypeReferenceParsing" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing"></a>

```typescript
public readonly complexDataTypeReferenceParsing: string;
```

- *Type:* string

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#complex_data_type_reference_parsing HealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `defaultSearchHandlingStrict`<sup>Optional</sup> <a name="defaultSearchHandlingStrict" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.defaultSearchHandlingStrict"></a>

```typescript
public readonly defaultSearchHandlingStrict: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#default_search_handling_strict HealthcareFhirStore#default_search_handling_strict}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#deletion_policy HealthcareFhirStore#deletion_policy}

---

##### `disableReferentialIntegrity`<sup>Optional</sup> <a name="disableReferentialIntegrity" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableReferentialIntegrity"></a>

```typescript
public readonly disableReferentialIntegrity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#disable_referential_integrity HealthcareFhirStore#disable_referential_integrity}

---

##### `disableResourceVersioning`<sup>Optional</sup> <a name="disableResourceVersioning" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.disableResourceVersioning"></a>

```typescript
public readonly disableResourceVersioning: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#disable_resource_versioning HealthcareFhirStore#disable_resource_versioning}

---

##### `enableHistoryImport`<sup>Optional</sup> <a name="enableHistoryImport" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableHistoryImport"></a>

```typescript
public readonly enableHistoryImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#enable_history_import HealthcareFhirStore#enable_history_import}

---

##### `enableUpdateCreate`<sup>Optional</sup> <a name="enableUpdateCreate" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.enableUpdateCreate"></a>

```typescript
public readonly enableUpdateCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#enable_update_create HealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#id HealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#labels HealthcareFhirStore#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: HealthcareFhirStoreNotificationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#notification_config HealthcareFhirStore#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.notificationConfigs"></a>

```typescript
public readonly notificationConfigs: IResolvable | HealthcareFhirStoreNotificationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>[]

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#notification_configs HealthcareFhirStore#notification_configs}

---

##### `streamConfigs`<sup>Optional</sup> <a name="streamConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.streamConfigs"></a>

```typescript
public readonly streamConfigs: IResolvable | HealthcareFhirStoreStreamConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>[]

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#stream_configs HealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareFhirStoreTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#timeouts HealthcareFhirStore#timeouts}

---

##### `validationConfig`<sup>Optional</sup> <a name="validationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreConfig.property.validationConfig"></a>

```typescript
public readonly validationConfig: HealthcareFhirStoreValidationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig">HealthcareFhirStoreValidationConfig</a>

validation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#validation_config HealthcareFhirStore#validation_config}

---

### HealthcareFhirStoreNotificationConfig <a name="HealthcareFhirStoreNotificationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreNotificationConfig: healthcareFhirStore.HealthcareFhirStoreNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}

---

### HealthcareFhirStoreNotificationConfigs <a name="HealthcareFhirStoreNotificationConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreNotificationConfigs: healthcareFhirStore.HealthcareFhirStoreNotificationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendFullResource">sendFullResource</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}

---

##### `sendFullResource`<sup>Optional</sup> <a name="sendFullResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendFullResource"></a>

```typescript
public readonly sendFullResource: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.

Note that setting this to true does not guarantee that all resources will be sent in the format of
full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
it needs to fetch the full resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#send_full_resource HealthcareFhirStore#send_full_resource}

---

##### `sendPreviousResourceOnDelete`<sup>Optional</sup> <a name="sendPreviousResourceOnDelete" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete"></a>

```typescript
public readonly sendPreviousResourceOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource.

Note that setting this to
true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#send_previous_resource_on_delete HealthcareFhirStore#send_previous_resource_on_delete}

---

### HealthcareFhirStoreStreamConfigs <a name="HealthcareFhirStoreStreamConfigs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreStreamConfigs: healthcareFhirStore.HealthcareFhirStoreStreamConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Supply a FHIR resource type (such as "Patient" or "Observation"). |

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.bigqueryDestination"></a>

```typescript
public readonly bigqueryDestination: HealthcareFhirStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#bigquery_destination HealthcareFhirStore#bigquery_destination}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Supply a FHIR resource type (such as "Patient" or "Observation").

See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#resource_types HealthcareFhirStore#resource_types}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestination <a name="HealthcareFhirStoreStreamConfigsBigqueryDestination" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreStreamConfigsBigqueryDestination: healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri">datasetUri</a></code> | <code>string</code> | BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | schema_config block. |

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri"></a>

```typescript
public readonly datasetUri: string;
```

- *Type:* string

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#dataset_uri HealthcareFhirStore#dataset_uri}

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig"></a>

```typescript
public readonly schemaConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#schema_config HealthcareFhirStore#schema_config}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig: healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>number</code> | The depth for all recursive structures in the output analytics schema. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | last_updated_partition_config block. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType">schemaType</a></code> | <code>string</code> | Specifies the output schema type. |

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth"></a>

```typescript
public readonly recursiveStructureDepth: number;
```

- *Type:* number

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#recursive_structure_depth HealthcareFhirStore#recursive_structure_depth}

---

##### `lastUpdatedPartitionConfig`<sup>Optional</sup> <a name="lastUpdatedPartitionConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig"></a>

```typescript
public readonly lastUpdatedPartitionConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#last_updated_partition_config HealthcareFhirStore#last_updated_partition_config}

---

##### `schemaType`<sup>Optional</sup> <a name="schemaType" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

Specifies the output schema type.

* ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
 * ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
 * LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#schema_type HealthcareFhirStore#schema_type}

---

### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig: healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type">type</a></code> | <code>string</code> | Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs">expirationMs</a></code> | <code>string</code> | Number of milliseconds for which to keep the storage for a partition. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#type HealthcareFhirStore#type}

---

##### `expirationMs`<sup>Optional</sup> <a name="expirationMs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs"></a>

```typescript
public readonly expirationMs: string;
```

- *Type:* string

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#expiration_ms HealthcareFhirStore#expiration_ms}

---

### HealthcareFhirStoreTimeouts <a name="HealthcareFhirStoreTimeouts" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreTimeouts: healthcareFhirStore.HealthcareFhirStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#create HealthcareFhirStore#create}. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#delete HealthcareFhirStore#delete}. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#update HealthcareFhirStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#create HealthcareFhirStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#delete HealthcareFhirStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#update HealthcareFhirStore#update}.

---

### HealthcareFhirStoreValidationConfig <a name="HealthcareFhirStoreValidationConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

const healthcareFhirStoreValidationConfig: healthcareFhirStore.HealthcareFhirStoreValidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableFhirpathValidation">disableFhirpathValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable FHIRPath validation for incoming resources. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableProfileValidation">disableProfileValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable profile validation for this FHIR store. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableReferenceTypeValidation">disableReferenceTypeValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable reference type validation for incoming resources. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableRequiredFieldValidation">disableRequiredFieldValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable required fields validation for incoming resources. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.enabledImplementationGuides">enabledImplementationGuides</a></code> | <code>string[]</code> | A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation. |

---

##### `disableFhirpathValidation`<sup>Optional</sup> <a name="disableFhirpathValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableFhirpathValidation"></a>

```typescript
public readonly disableFhirpathValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable FHIRPath validation for incoming resources.

The default value is false. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#disable_fhirpath_validation HealthcareFhirStore#disable_fhirpath_validation}

---

##### `disableProfileValidation`<sup>Optional</sup> <a name="disableProfileValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableProfileValidation"></a>

```typescript
public readonly disableProfileValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable profile validation for this FHIR store.

The default value is false. Set this to true to disable checking incoming resources for conformance against structure definitions in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#disable_profile_validation HealthcareFhirStore#disable_profile_validation}

---

##### `disableReferenceTypeValidation`<sup>Optional</sup> <a name="disableReferenceTypeValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableReferenceTypeValidation"></a>

```typescript
public readonly disableReferenceTypeValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable reference type validation for incoming resources.

The default value is false. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#disable_reference_type_validation HealthcareFhirStore#disable_reference_type_validation}

---

##### `disableRequiredFieldValidation`<sup>Optional</sup> <a name="disableRequiredFieldValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.disableRequiredFieldValidation"></a>

```typescript
public readonly disableRequiredFieldValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable required fields validation for incoming resources.

The default value is false. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#disable_required_field_validation HealthcareFhirStore#disable_required_field_validation}

---

##### `enabledImplementationGuides`<sup>Optional</sup> <a name="enabledImplementationGuides" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig.property.enabledImplementationGuides"></a>

```typescript
public readonly enabledImplementationGuides: string[];
```

- *Type:* string[]

A list of implementation guide URLs in this FHIR store that are used to configure the profiles to use for validation.

When a URL cannot be resolved (for example, in a type assertion), the server does not return an error.
For example, to use the US Core profiles for validation, set enabledImplementationGuides to ["http://hl7.org/fhir/us/core/ImplementationGuide/ig"]. If enabledImplementationGuides is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the global property of one of the enabled ImplementationGuides.
The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported:
- min/max
- minValue/maxValue
- maxLength
- type
- fixed[x]
- pattern[x] on simple types
- slicing, when using "value" as the discriminator type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/healthcare_fhir_store#enabled_implementation_guides HealthcareFhirStore#enabled_implementation_guides}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirStoreNotificationConfigOutputReference <a name="HealthcareFhirStoreNotificationConfigOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirStoreNotificationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfig">HealthcareFhirStoreNotificationConfig</a>

---


### HealthcareFhirStoreNotificationConfigsList <a name="HealthcareFhirStoreNotificationConfigsList" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.get"></a>

```typescript
public get(index: number): HealthcareFhirStoreNotificationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirStoreNotificationConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>[]

---


### HealthcareFhirStoreNotificationConfigsOutputReference <a name="HealthcareFhirStoreNotificationConfigsOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource">resetSendFullResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete">resetSendPreviousResourceOnDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendFullResource` <a name="resetSendFullResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource"></a>

```typescript
public resetSendFullResource(): void
```

##### `resetSendPreviousResourceOnDelete` <a name="resetSendPreviousResourceOnDelete" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete"></a>

```typescript
public resetSendPreviousResourceOnDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput">sendFullResourceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput">sendPreviousResourceOnDeleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource">sendFullResource</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `sendFullResourceInput`<sup>Optional</sup> <a name="sendFullResourceInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput"></a>

```typescript
public readonly sendFullResourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sendPreviousResourceOnDeleteInput`<sup>Optional</sup> <a name="sendPreviousResourceOnDeleteInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput"></a>

```typescript
public readonly sendPreviousResourceOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `sendFullResource`<sup>Required</sup> <a name="sendFullResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource"></a>

```typescript
public readonly sendFullResource: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sendPreviousResourceOnDelete`<sup>Required</sup> <a name="sendPreviousResourceOnDelete" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete"></a>

```typescript
public readonly sendPreviousResourceOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirStoreNotificationConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreNotificationConfigs">HealthcareFhirStoreNotificationConfigs</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig">putSchemaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaConfig` <a name="putSchemaConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig"></a>

```typescript
public putSchemaConfig(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput">datasetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput">schemaConfigInput</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri">datasetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig"></a>

```typescript
public readonly schemaConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a>

---

##### `datasetUriInput`<sup>Optional</sup> <a name="datasetUriInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput"></a>

```typescript
public readonly datasetUriInput: string;
```

- *Type:* string

---

##### `schemaConfigInput`<sup>Optional</sup> <a name="schemaConfigInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput"></a>

```typescript
public readonly schemaConfigInput: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri"></a>

```typescript
public readonly datasetUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs">resetExpirationMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationMs` <a name="resetExpirationMs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs"></a>

```typescript
public resetExpirationMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput">expirationMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs">expirationMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationMsInput`<sup>Optional</sup> <a name="expirationMsInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput"></a>

```typescript
public readonly expirationMsInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expirationMs`<sup>Required</sup> <a name="expirationMs" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs"></a>

```typescript
public readonly expirationMs: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---


### HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference <a name="HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig">putLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig">resetLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType">resetSchemaType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastUpdatedPartitionConfig` <a name="putLastUpdatedPartitionConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig"></a>

```typescript
public putLastUpdatedPartitionConfig(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `resetLastUpdatedPartitionConfig` <a name="resetLastUpdatedPartitionConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig"></a>

```typescript
public resetLastUpdatedPartitionConfig(): void
```

##### `resetSchemaType` <a name="resetSchemaType" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType"></a>

```typescript
public resetSchemaType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput">lastUpdatedPartitionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput">recursiveStructureDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput">schemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType">schemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedPartitionConfig`<sup>Required</sup> <a name="lastUpdatedPartitionConfig" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig"></a>

```typescript
public readonly lastUpdatedPartitionConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a>

---

##### `lastUpdatedPartitionConfigInput`<sup>Optional</sup> <a name="lastUpdatedPartitionConfigInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput"></a>

```typescript
public readonly lastUpdatedPartitionConfigInput: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `recursiveStructureDepthInput`<sup>Optional</sup> <a name="recursiveStructureDepthInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput"></a>

```typescript
public readonly recursiveStructureDepthInput: number;
```

- *Type:* number

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput"></a>

```typescript
public readonly schemaTypeInput: string;
```

- *Type:* string

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth"></a>

```typescript
public readonly recursiveStructureDepth: number;
```

- *Type:* number

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


### HealthcareFhirStoreStreamConfigsList <a name="HealthcareFhirStoreStreamConfigsList" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreStreamConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get"></a>

```typescript
public get(index: number): HealthcareFhirStoreStreamConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirStoreStreamConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>[]

---


### HealthcareFhirStoreStreamConfigsOutputReference <a name="HealthcareFhirStoreStreamConfigsOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination">putBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryDestination` <a name="putBigqueryDestination" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```typescript
public putBigqueryDestination(value: HealthcareFhirStoreStreamConfigsBigqueryDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">bigqueryDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```typescript
public readonly bigqueryDestination: HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `bigqueryDestinationInput`<sup>Optional</sup> <a name="bigqueryDestinationInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```typescript
public readonly bigqueryDestinationInput: HealthcareFhirStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsBigqueryDestination">HealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirStoreStreamConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreStreamConfigs">HealthcareFhirStoreStreamConfigs</a>

---


### HealthcareFhirStoreTimeoutsOutputReference <a name="HealthcareFhirStoreTimeoutsOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareFhirStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreTimeouts">HealthcareFhirStoreTimeouts</a>

---


### HealthcareFhirStoreValidationConfigOutputReference <a name="HealthcareFhirStoreValidationConfigOutputReference" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.Initializer"></a>

```typescript
import { healthcareFhirStore } from '@cdktn/provider-google'

new healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableFhirpathValidation">resetDisableFhirpathValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableProfileValidation">resetDisableProfileValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableReferenceTypeValidation">resetDisableReferenceTypeValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableRequiredFieldValidation">resetDisableRequiredFieldValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetEnabledImplementationGuides">resetEnabledImplementationGuides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableFhirpathValidation` <a name="resetDisableFhirpathValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableFhirpathValidation"></a>

```typescript
public resetDisableFhirpathValidation(): void
```

##### `resetDisableProfileValidation` <a name="resetDisableProfileValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableProfileValidation"></a>

```typescript
public resetDisableProfileValidation(): void
```

##### `resetDisableReferenceTypeValidation` <a name="resetDisableReferenceTypeValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableReferenceTypeValidation"></a>

```typescript
public resetDisableReferenceTypeValidation(): void
```

##### `resetDisableRequiredFieldValidation` <a name="resetDisableRequiredFieldValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetDisableRequiredFieldValidation"></a>

```typescript
public resetDisableRequiredFieldValidation(): void
```

##### `resetEnabledImplementationGuides` <a name="resetEnabledImplementationGuides" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.resetEnabledImplementationGuides"></a>

```typescript
public resetEnabledImplementationGuides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidationInput">disableFhirpathValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidationInput">disableProfileValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidationInput">disableReferenceTypeValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidationInput">disableRequiredFieldValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuidesInput">enabledImplementationGuidesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidation">disableFhirpathValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidation">disableProfileValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidation">disableReferenceTypeValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidation">disableRequiredFieldValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuides">enabledImplementationGuides</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig">HealthcareFhirStoreValidationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableFhirpathValidationInput`<sup>Optional</sup> <a name="disableFhirpathValidationInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidationInput"></a>

```typescript
public readonly disableFhirpathValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableProfileValidationInput`<sup>Optional</sup> <a name="disableProfileValidationInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidationInput"></a>

```typescript
public readonly disableProfileValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableReferenceTypeValidationInput`<sup>Optional</sup> <a name="disableReferenceTypeValidationInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidationInput"></a>

```typescript
public readonly disableReferenceTypeValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableRequiredFieldValidationInput`<sup>Optional</sup> <a name="disableRequiredFieldValidationInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidationInput"></a>

```typescript
public readonly disableRequiredFieldValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabledImplementationGuidesInput`<sup>Optional</sup> <a name="enabledImplementationGuidesInput" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuidesInput"></a>

```typescript
public readonly enabledImplementationGuidesInput: string[];
```

- *Type:* string[]

---

##### `disableFhirpathValidation`<sup>Required</sup> <a name="disableFhirpathValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableFhirpathValidation"></a>

```typescript
public readonly disableFhirpathValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableProfileValidation`<sup>Required</sup> <a name="disableProfileValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableProfileValidation"></a>

```typescript
public readonly disableProfileValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableReferenceTypeValidation`<sup>Required</sup> <a name="disableReferenceTypeValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableReferenceTypeValidation"></a>

```typescript
public readonly disableReferenceTypeValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableRequiredFieldValidation`<sup>Required</sup> <a name="disableRequiredFieldValidation" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.disableRequiredFieldValidation"></a>

```typescript
public readonly disableRequiredFieldValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabledImplementationGuides`<sup>Required</sup> <a name="enabledImplementationGuides" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.enabledImplementationGuides"></a>

```typescript
public readonly enabledImplementationGuides: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthcareFhirStoreValidationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareFhirStore.HealthcareFhirStoreValidationConfig">HealthcareFhirStoreValidationConfig</a>

---



