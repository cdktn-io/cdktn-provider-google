# `kmsProjectAutokeyConfig` Submodule <a name="`kmsProjectAutokeyConfig` Submodule" id="@cdktn/provider-google.kmsProjectAutokeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsProjectAutokeyConfig <a name="KmsProjectAutokeyConfig" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config google_kms_project_autokey_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

new kmsProjectAutokeyConfig.KmsProjectAutokeyConfig(scope: Construct, id: string, config?: KmsProjectAutokeyConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig">KmsProjectAutokeyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig">KmsProjectAutokeyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetKeyProjectResolutionMode">resetKeyProjectResolutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: KmsProjectAutokeyConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyProjectResolutionMode` <a name="resetKeyProjectResolutionMode" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetKeyProjectResolutionMode"></a>

```typescript
public resetKeyProjectResolutionMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isConstruct"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformElement"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformResource"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsProjectAutokeyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsProjectAutokeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KmsProjectAutokeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference">KmsProjectAutokeyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionModeInput">keyProjectResolutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionMode">keyProjectResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsProjectAutokeyConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference">KmsProjectAutokeyConfigTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyProjectResolutionModeInput`<sup>Optional</sup> <a name="keyProjectResolutionModeInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionModeInput"></a>

```typescript
public readonly keyProjectResolutionModeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KmsProjectAutokeyConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyProjectResolutionMode`<sup>Required</sup> <a name="keyProjectResolutionMode" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.keyProjectResolutionMode"></a>

```typescript
public readonly keyProjectResolutionMode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsProjectAutokeyConfigConfig <a name="KmsProjectAutokeyConfigConfig" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.Initializer"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

const kmsProjectAutokeyConfigConfig: kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#id KmsProjectAutokeyConfig#id}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode">keyProjectResolutionMode</a></code> | <code>string</code> | How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#project KmsProjectAutokeyConfig#project}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#deletion_policy KmsProjectAutokeyConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#id KmsProjectAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyProjectResolutionMode`<sup>Optional</sup> <a name="keyProjectResolutionMode" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode"></a>

```typescript
public readonly keyProjectResolutionMode: string;
```

- *Type:* string

How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#key_project_resolution_mode KmsProjectAutokeyConfig#key_project_resolution_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#project KmsProjectAutokeyConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsProjectAutokeyConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#timeouts KmsProjectAutokeyConfig#timeouts}

---

### KmsProjectAutokeyConfigTimeouts <a name="KmsProjectAutokeyConfigTimeouts" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.Initializer"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

const kmsProjectAutokeyConfigTimeouts: kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#create KmsProjectAutokeyConfig#create}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#delete KmsProjectAutokeyConfig#delete}. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#update KmsProjectAutokeyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#create KmsProjectAutokeyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#delete KmsProjectAutokeyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/kms_project_autokey_config#update KmsProjectAutokeyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsProjectAutokeyConfigTimeoutsOutputReference <a name="KmsProjectAutokeyConfigTimeoutsOutputReference" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { kmsProjectAutokeyConfig } from '@cdktn/provider-google'

new kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsProjectAutokeyConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.kmsProjectAutokeyConfig.KmsProjectAutokeyConfigTimeouts">KmsProjectAutokeyConfigTimeouts</a>

---



