# `saasRuntimeUnitOperation` Submodule <a name="`saasRuntimeUnitOperation` Submodule" id="@cdktn/provider-google.saasRuntimeUnitOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitOperation <a name="SaasRuntimeUnitOperation" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation google_saas_runtime_unit_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperation(scope: Construct, id: string, config: SaasRuntimeUnitOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig">SaasRuntimeUnitOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig">SaasRuntimeUnitOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision">putDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision">putProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade">putUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision">resetDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision">resetProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade">resetUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion">resetWaitForCompletion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeprovision` <a name="putDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision"></a>

```typescript
public putDeprovision(value: SaasRuntimeUnitOperationDeprovision): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putDeprovision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `putProvision` <a name="putProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision"></a>

```typescript
public putProvision(value: SaasRuntimeUnitOperationProvision): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putProvision.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts"></a>

```typescript
public putTimeouts(value: SaasRuntimeUnitOperationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `putUpgrade` <a name="putUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade"></a>

```typescript
public putUpgrade(value: SaasRuntimeUnitOperationUpgrade): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeprovision` <a name="resetDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetDeprovision"></a>

```typescript
public resetDeprovision(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProvision` <a name="resetProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetProvision"></a>

```typescript
public resetProvision(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgrade` <a name="resetUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetUpgrade"></a>

```typescript
public resetUpgrade(): void
```

##### `resetWaitForCompletion` <a name="resetWaitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.resetWaitForCompletion"></a>

```typescript
public resetWaitForCompletion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SaasRuntimeUnitOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SaasRuntimeUnitOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SaasRuntimeUnitOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState">engineState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory">errorCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput">deprovisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput">provisionInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput">unitOperationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput">upgradeInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput">waitForCompletionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId">unitOperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion">waitForCompletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.conditions"></a>

```typescript
public readonly conditions: SaasRuntimeUnitOperationConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList">SaasRuntimeUnitOperationConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deprovision`<sup>Required</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovision"></a>

```typescript
public readonly deprovision: SaasRuntimeUnitOperationDeprovisionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference">SaasRuntimeUnitOperationDeprovisionOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `engineState`<sup>Required</sup> <a name="engineState" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.engineState"></a>

```typescript
public readonly engineState: string;
```

- *Type:* string

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.errorCategory"></a>

```typescript
public readonly errorCategory: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provision`<sup>Required</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provision"></a>

```typescript
public readonly provision: SaasRuntimeUnitOperationProvisionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference">SaasRuntimeUnitOperationProvisionOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeUnitOperationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference">SaasRuntimeUnitOperationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgrade"></a>

```typescript
public readonly upgrade: SaasRuntimeUnitOperationUpgradeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference">SaasRuntimeUnitOperationUpgradeOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deprovisionInput`<sup>Optional</sup> <a name="deprovisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deprovisionInput"></a>

```typescript
public readonly deprovisionInput: SaasRuntimeUnitOperationDeprovision;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `provisionInput`<sup>Optional</sup> <a name="provisionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.provisionInput"></a>

```typescript
public readonly provisionInput: SaasRuntimeUnitOperationProvision;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SaasRuntimeUnitOperationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `unitOperationIdInput`<sup>Optional</sup> <a name="unitOperationIdInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationIdInput"></a>

```typescript
public readonly unitOperationIdInput: string;
```

- *Type:* string

---

##### `upgradeInput`<sup>Optional</sup> <a name="upgradeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.upgradeInput"></a>

```typescript
public readonly upgradeInput: SaasRuntimeUnitOperationUpgrade;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---

##### `waitForCompletionInput`<sup>Optional</sup> <a name="waitForCompletionInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletionInput"></a>

```typescript
public readonly waitForCompletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.unitOperationId"></a>

```typescript
public readonly unitOperationId: string;
```

- *Type:* string

---

##### `waitForCompletion`<sup>Required</sup> <a name="waitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.waitForCompletion"></a>

```typescript
public readonly waitForCompletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitOperationConditions <a name="SaasRuntimeUnitOperationConditions" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationConditions: saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions = { ... }
```


### SaasRuntimeUnitOperationConfig <a name="SaasRuntimeUnitOperationConfig" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationConfig: saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit">unit</a></code> | <code>string</code> | The Unit a given UnitOperation will act upon. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId">unitOperationId</a></code> | <code>string</code> | The ID value for the new unit operation. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision">deprovision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | deprovision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision">provision</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | provision block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade">upgrade</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion">waitForCompletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#location SaasRuntimeUnitOperation#location}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The Unit a given UnitOperation will act upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit SaasRuntimeUnitOperation#unit}

---

##### `unitOperationId`<sup>Required</sup> <a name="unitOperationId" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.unitOperationId"></a>

```typescript
public readonly unitOperationId: string;
```

- *Type:* string

The ID value for the new unit operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#unit_operation_id SaasRuntimeUnitOperation#unit_operation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#annotations SaasRuntimeUnitOperation#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deletion_policy SaasRuntimeUnitOperation#deletion_policy}

---

##### `deprovision`<sup>Optional</sup> <a name="deprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.deprovision"></a>

```typescript
public readonly deprovision: SaasRuntimeUnitOperationDeprovision;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

deprovision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#deprovision SaasRuntimeUnitOperation#deprovision}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#id SaasRuntimeUnitOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#labels SaasRuntimeUnitOperation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#project SaasRuntimeUnitOperation#project}.

---

##### `provision`<sup>Optional</sup> <a name="provision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.provision"></a>

```typescript
public readonly provision: SaasRuntimeUnitOperationProvision;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

provision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#provision SaasRuntimeUnitOperation#provision}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeUnitOperationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#timeouts SaasRuntimeUnitOperation#timeouts}

---

##### `upgrade`<sup>Optional</sup> <a name="upgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.upgrade"></a>

```typescript
public readonly upgrade: SaasRuntimeUnitOperationUpgrade;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#upgrade SaasRuntimeUnitOperation#upgrade}

---

##### `waitForCompletion`<sup>Optional</sup> <a name="waitForCompletion" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConfig.property.waitForCompletion"></a>

```typescript
public readonly waitForCompletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, wait for the UnitOperation to reach a terminal state (SUCCEEDED, FAILED, CANCELLED) before completing the apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#wait_for_completion SaasRuntimeUnitOperation#wait_for_completion}

---

### SaasRuntimeUnitOperationDeprovision <a name="SaasRuntimeUnitOperationDeprovision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationDeprovision: saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision = { ... }
```


### SaasRuntimeUnitOperationProvision <a name="SaasRuntimeUnitOperationProvision" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationProvision: saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables">inputVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release">release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.inputVariables"></a>

```typescript
public readonly inputVariables: IResolvable | SaasRuntimeUnitOperationProvisionInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationProvisionInputVariables <a name="SaasRuntimeUnitOperationProvisionInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationProvisionInputVariables: saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable">variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type">type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value">value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

### SaasRuntimeUnitOperationTimeouts <a name="SaasRuntimeUnitOperationTimeouts" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationTimeouts: saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#create SaasRuntimeUnitOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#delete SaasRuntimeUnitOperation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#update SaasRuntimeUnitOperation#update}.

---

### SaasRuntimeUnitOperationUpgrade <a name="SaasRuntimeUnitOperationUpgrade" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationUpgrade: saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables">inputVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | input_variables block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release">release</a></code> | <code>string</code> | Reference to the Release object to use for the Unit. (optional). |

---

##### `inputVariables`<sup>Optional</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.inputVariables"></a>

```typescript
public readonly inputVariables: IResolvable | SaasRuntimeUnitOperationUpgradeInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

input_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#input_variables SaasRuntimeUnitOperation#input_variables}

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

Reference to the Release object to use for the Unit. (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#release SaasRuntimeUnitOperation#release}

---

### SaasRuntimeUnitOperationUpgradeInputVariables <a name="SaasRuntimeUnitOperationUpgradeInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

const saasRuntimeUnitOperationUpgradeInputVariables: saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable">variable</a></code> | <code>string</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type">type</a></code> | <code>string</code> | Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value">value</a></code> | <code>string</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#variable SaasRuntimeUnitOperation#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Name of a supported variable type. Supported types are string, int, bool. Possible values: STRING INT BOOL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#type SaasRuntimeUnitOperation#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_operation#value SaasRuntimeUnitOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitOperationConditionsList <a name="SaasRuntimeUnitOperationConditionsList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get"></a>

```typescript
public get(index: number): SaasRuntimeUnitOperationConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SaasRuntimeUnitOperationConditionsOutputReference <a name="SaasRuntimeUnitOperationConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitOperationConditions;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationConditions">SaasRuntimeUnitOperationConditions</a>

---


### SaasRuntimeUnitOperationDeprovisionOutputReference <a name="SaasRuntimeUnitOperationDeprovisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovisionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitOperationDeprovision;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationDeprovision">SaasRuntimeUnitOperationDeprovision</a>

---


### SaasRuntimeUnitOperationProvisionInputVariablesList <a name="SaasRuntimeUnitOperationProvisionInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get"></a>

```typescript
public get(index: number): SaasRuntimeUnitOperationProvisionInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitOperationProvisionInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

---


### SaasRuntimeUnitOperationProvisionInputVariablesOutputReference <a name="SaasRuntimeUnitOperationProvisionInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitOperationProvisionInputVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>

---


### SaasRuntimeUnitOperationProvisionOutputReference <a name="SaasRuntimeUnitOperationProvisionOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables"></a>

```typescript
public putInputVariables(value: IResolvable | SaasRuntimeUnitOperationProvisionInputVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetInputVariables"></a>

```typescript
public resetInputVariables(): void
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.resetRelease"></a>

```typescript
public resetRelease(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput">releaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release">release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: SaasRuntimeUnitOperationProvisionInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariablesList">SaasRuntimeUnitOperationProvisionInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.inputVariablesInput"></a>

```typescript
public readonly inputVariablesInput: IResolvable | SaasRuntimeUnitOperationProvisionInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionInputVariables">SaasRuntimeUnitOperationProvisionInputVariables</a>[]

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.releaseInput"></a>

```typescript
public readonly releaseInput: string;
```

- *Type:* string

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvisionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitOperationProvision;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationProvision">SaasRuntimeUnitOperationProvision</a>

---


### SaasRuntimeUnitOperationTimeoutsOutputReference <a name="SaasRuntimeUnitOperationTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitOperationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationTimeouts">SaasRuntimeUnitOperationTimeouts</a>

---


### SaasRuntimeUnitOperationUpgradeInputVariablesList <a name="SaasRuntimeUnitOperationUpgradeInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get"></a>

```typescript
public get(index: number): SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitOperationUpgradeInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---


### SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference <a name="SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitOperationUpgradeInputVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>

---


### SaasRuntimeUnitOperationUpgradeOutputReference <a name="SaasRuntimeUnitOperationUpgradeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitOperation } from '@cdktn/provider-google'

new saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables">putInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables">resetInputVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease">resetRelease</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputVariables` <a name="putInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables"></a>

```typescript
public putInputVariables(value: IResolvable | SaasRuntimeUnitOperationUpgradeInputVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.putInputVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `resetInputVariables` <a name="resetInputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetInputVariables"></a>

```typescript
public resetInputVariables(): void
```

##### `resetRelease` <a name="resetRelease" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.resetRelease"></a>

```typescript
public resetRelease(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput">inputVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput">releaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release">release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: SaasRuntimeUnitOperationUpgradeInputVariablesList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariablesList">SaasRuntimeUnitOperationUpgradeInputVariablesList</a>

---

##### `inputVariablesInput`<sup>Optional</sup> <a name="inputVariablesInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.inputVariablesInput"></a>

```typescript
public readonly inputVariablesInput: IResolvable | SaasRuntimeUnitOperationUpgradeInputVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeInputVariables">SaasRuntimeUnitOperationUpgradeInputVariables</a>[]

---

##### `releaseInput`<sup>Optional</sup> <a name="releaseInput" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.releaseInput"></a>

```typescript
public readonly releaseInput: string;
```

- *Type:* string

---

##### `release`<sup>Required</sup> <a name="release" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.release"></a>

```typescript
public readonly release: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgradeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitOperationUpgrade;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitOperation.SaasRuntimeUnitOperationUpgrade">SaasRuntimeUnitOperationUpgrade</a>

---



