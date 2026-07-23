# `healthcareConsentStore` Submodule <a name="`healthcareConsentStore` Submodule" id="@cdktn/provider-google.healthcareConsentStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareConsentStore <a name="HealthcareConsentStore" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store google_healthcare_consent_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

new healthcareConsentStore.HealthcareConsentStore(scope: Construct, id: string, config: HealthcareConsentStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig">HealthcareConsentStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig">HealthcareConsentStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetDefaultConsentTtl">resetDefaultConsentTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetEnableConsentCreateOnUpdate">resetEnableConsentCreateOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.putTimeouts"></a>

```typescript
public putTimeouts(value: HealthcareConsentStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

---

##### `resetDefaultConsentTtl` <a name="resetDefaultConsentTtl" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetDefaultConsentTtl"></a>

```typescript
public resetDefaultConsentTtl(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEnableConsentCreateOnUpdate` <a name="resetEnableConsentCreateOnUpdate" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetEnableConsentCreateOnUpdate"></a>

```typescript
public resetEnableConsentCreateOnUpdate(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthcareConsentStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isConstruct"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

healthcareConsentStore.HealthcareConsentStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformElement"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

healthcareConsentStore.HealthcareConsentStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformResource"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

healthcareConsentStore.HealthcareConsentStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.generateConfigForImport"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

healthcareConsentStore.HealthcareConsentStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HealthcareConsentStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareConsentStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareConsentStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthcareConsentStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference">HealthcareConsentStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtlInput">defaultConsentTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdateInput">enableConsentCreateOnUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtl">defaultConsentTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdate">enableConsentCreateOnUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareConsentStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference">HealthcareConsentStoreTimeoutsOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `defaultConsentTtlInput`<sup>Optional</sup> <a name="defaultConsentTtlInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtlInput"></a>

```typescript
public readonly defaultConsentTtlInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `enableConsentCreateOnUpdateInput`<sup>Optional</sup> <a name="enableConsentCreateOnUpdateInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdateInput"></a>

```typescript
public readonly enableConsentCreateOnUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HealthcareConsentStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `defaultConsentTtl`<sup>Required</sup> <a name="defaultConsentTtl" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.defaultConsentTtl"></a>

```typescript
public readonly defaultConsentTtl: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `enableConsentCreateOnUpdate`<sup>Required</sup> <a name="enableConsentCreateOnUpdate" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.enableConsentCreateOnUpdate"></a>

```typescript
public readonly enableConsentCreateOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareConsentStoreConfig <a name="HealthcareConsentStoreConfig" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

const healthcareConsentStoreConfig: healthcareConsentStore.HealthcareConsentStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dataset">dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.name">name</a></code> | <code>string</code> | The name of this ConsentStore, for example: "consent1". |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.defaultConsentTtl">defaultConsentTtl</a></code> | <code>string</code> | Default time to live for consents in this store. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.enableConsentCreateOnUpdate">enableConsentCreateOnUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#id HealthcareConsentStore#id}. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key-value pairs used to organize Consent stores. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#dataset HealthcareConsentStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this ConsentStore, for example: "consent1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#name HealthcareConsentStore#name}

---

##### `defaultConsentTtl`<sup>Optional</sup> <a name="defaultConsentTtl" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.defaultConsentTtl"></a>

```typescript
public readonly defaultConsentTtl: string;
```

- *Type:* string

Default time to live for consents in this store.

Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#default_consent_ttl HealthcareConsentStore#default_consent_ttl}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#deletion_policy HealthcareConsentStore#deletion_policy}

---

##### `enableConsentCreateOnUpdate`<sup>Optional</sup> <a name="enableConsentCreateOnUpdate" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.enableConsentCreateOnUpdate"></a>

```typescript
public readonly enableConsentCreateOnUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#enable_consent_create_on_update HealthcareConsentStore#enable_consent_create_on_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#id HealthcareConsentStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key-value pairs used to organize Consent stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}'

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}\p{N}_-]{0,63}'

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#labels HealthcareConsentStore#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HealthcareConsentStoreTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#timeouts HealthcareConsentStore#timeouts}

---

### HealthcareConsentStoreTimeouts <a name="HealthcareConsentStoreTimeouts" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

const healthcareConsentStoreTimeouts: healthcareConsentStore.HealthcareConsentStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#create HealthcareConsentStore#create}. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#delete HealthcareConsentStore#delete}. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#update HealthcareConsentStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#create HealthcareConsentStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#delete HealthcareConsentStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/healthcare_consent_store#update HealthcareConsentStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareConsentStoreTimeoutsOutputReference <a name="HealthcareConsentStoreTimeoutsOutputReference" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { healthcareConsentStore } from '@cdktn/provider-google'

new healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthcareConsentStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.healthcareConsentStore.HealthcareConsentStoreTimeouts">HealthcareConsentStoreTimeouts</a>

---



