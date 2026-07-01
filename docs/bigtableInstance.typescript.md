# `bigtableInstance` Submodule <a name="`bigtableInstance` Submodule" id="@cdktn/provider-google.bigtableInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableInstance <a name="BigtableInstance" id="@cdktn/provider-google.bigtableInstance.BigtableInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance google_bigtable_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

new bigtableInstance.BigtableInstance(scope: Construct, id: string, config: BigtableInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig">BigtableInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig">BigtableInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.putCluster">putCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCluster` <a name="putCluster" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.putCluster"></a>

```typescript
public putCluster(value: IResolvable | BigtableInstanceCluster[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.putCluster.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: BigtableInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>

---

##### `resetCluster` <a name="resetCluster" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigtableInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.isConstruct"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

bigtableInstance.BigtableInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.isTerraformElement"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

bigtableInstance.BigtableInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.isTerraformResource"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

bigtableInstance.BigtableInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

bigtableInstance.BigtableInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BigtableInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigtableInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigtableInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigtableInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.cluster">cluster</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList">BigtableInstanceClusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference">BigtableInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.clusterInput">clusterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.cluster"></a>

```typescript
public readonly cluster: BigtableInstanceClusterList;
```

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList">BigtableInstanceClusterList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.timeouts"></a>

```typescript
public readonly timeouts: BigtableInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference">BigtableInstanceTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.clusterInput"></a>

```typescript
public readonly clusterInput: IResolvable | BigtableInstanceCluster[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigtableInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigtableInstance.BigtableInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableInstanceCluster <a name="BigtableInstanceCluster" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

const bigtableInstanceCluster: bigtableInstance.BigtableInstanceCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the Cloud Bigtable cluster. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.nodeScalingFactor">nodeScalingFactor</a></code> | <code>string</code> | The node scaling factor of this cluster. One of "NodeScalingFactor1X" or "NodeScalingFactor2X". Defaults to "NodeScalingFactor1X". |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.numNodes">numNodes</a></code> | <code>number</code> | The number of nodes in the cluster. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.storageType">storageType</a></code> | <code>string</code> | The storage type to use. One of "SSD" or "HDD". Defaults to "SSD". |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.zone">zone</a></code> | <code>string</code> | The zone to create the Cloud Bigtable cluster in. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the Cloud Bigtable cluster.

Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#cluster_id BigtableInstance#cluster_id}

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: BigtableInstanceClusterAutoscalingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#autoscaling_config BigtableInstance#autoscaling_config}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster.

The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. 3) All clusters within an instance must use the same CMEK key. Values are of the form projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#kms_key_name BigtableInstance#kms_key_name}

---

##### `nodeScalingFactor`<sup>Optional</sup> <a name="nodeScalingFactor" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.nodeScalingFactor"></a>

```typescript
public readonly nodeScalingFactor: string;
```

- *Type:* string

The node scaling factor of this cluster. One of "NodeScalingFactor1X" or "NodeScalingFactor2X". Defaults to "NodeScalingFactor1X".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#node_scaling_factor BigtableInstance#node_scaling_factor}

---

##### `numNodes`<sup>Optional</sup> <a name="numNodes" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.numNodes"></a>

```typescript
public readonly numNodes: number;
```

- *Type:* number

The number of nodes in the cluster.

If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#num_nodes BigtableInstance#num_nodes}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

The storage type to use. One of "SSD" or "HDD". Defaults to "SSD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#storage_type BigtableInstance#storage_type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone to create the Cloud Bigtable cluster in.

Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#zone BigtableInstance#zone}

---

### BigtableInstanceClusterAutoscalingConfig <a name="BigtableInstanceClusterAutoscalingConfig" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

const bigtableInstanceClusterAutoscalingConfig: bigtableInstance.BigtableInstanceClusterAutoscalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.cpuTarget">cpuTarget</a></code> | <code>number</code> | The target CPU utilization for autoscaling. Value must be between 10 and 80. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.maxNodes">maxNodes</a></code> | <code>number</code> | The maximum number of nodes for autoscaling. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.minNodes">minNodes</a></code> | <code>number</code> | The minimum number of nodes for autoscaling. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.storageTarget">storageTarget</a></code> | <code>number</code> | The target storage utilization for autoscaling, in GB, for each node in a cluster. |

---

##### `cpuTarget`<sup>Required</sup> <a name="cpuTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.cpuTarget"></a>

```typescript
public readonly cpuTarget: number;
```

- *Type:* number

The target CPU utilization for autoscaling. Value must be between 10 and 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#cpu_target BigtableInstance#cpu_target}

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

The maximum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#max_nodes BigtableInstance#max_nodes}

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

The minimum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#min_nodes BigtableInstance#min_nodes}

---

##### `storageTarget`<sup>Optional</sup> <a name="storageTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.storageTarget"></a>

```typescript
public readonly storageTarget: number;
```

- *Type:* number

The target storage utilization for autoscaling, in GB, for each node in a cluster.

This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#storage_target BigtableInstance#storage_target}

---

### BigtableInstanceConfig <a name="BigtableInstanceConfig" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

const bigtableInstanceConfig: bigtableInstance.BigtableInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.name">name</a></code> | <code>string</code> | The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.cluster">cluster</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>[]</code> | cluster block. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable display name of the Bigtable instance. Defaults to the instance name. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.edition">edition</a></code> | <code>string</code> | The edition of the instance. One of "ENTERPRISE" or "ENTERPRISE_PLUS". Defaults to "ENTERPRISE". |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | When deleting a BigTable instance, this boolean option will delete all backups within the instance. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#id BigtableInstance#id}. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION". |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of Resource Manager Tags. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance.

Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#name BigtableInstance#name}

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.cluster"></a>

```typescript
public readonly cluster: IResolvable | BigtableInstanceCluster[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>[]

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#cluster BigtableInstance#cluster}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#deletion_policy BigtableInstance#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the instance will fail.

When the field is set to false, deleting the instance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#deletion_protection BigtableInstance#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable display name of the Bigtable instance. Defaults to the instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#display_name BigtableInstance#display_name}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

The edition of the instance. One of "ENTERPRISE" or "ENTERPRISE_PLUS". Defaults to "ENTERPRISE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#edition BigtableInstance#edition}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When deleting a BigTable instance, this boolean option will delete all backups within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#force_destroy BigtableInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#id BigtableInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#instance_type BigtableInstance#instance_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#labels BigtableInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#project BigtableInstance#project}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of Resource Manager Tags.

Keys can be either the numeric tag key ID (tagKeys/123) or the namespaced name (project/tag-key). Values can be the numeric tag value ID (tagValues/456) or the namespaced value (project/tag-key/tag-value). The field is ignored when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#tags BigtableInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigtableInstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#timeouts BigtableInstance#timeouts}

---

### BigtableInstanceTimeouts <a name="BigtableInstanceTimeouts" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

const bigtableInstanceTimeouts: bigtableInstance.BigtableInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#create BigtableInstance#create}. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#read BigtableInstance#read}. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#update BigtableInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#create BigtableInstance#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#read BigtableInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/bigtable_instance#update BigtableInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableInstanceClusterAutoscalingConfigOutputReference <a name="BigtableInstanceClusterAutoscalingConfigOutputReference" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

new bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget">resetStorageTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageTarget` <a name="resetStorageTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget"></a>

```typescript
public resetStorageTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput">cpuTargetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput">storageTargetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget">cpuTarget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget">storageTarget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuTargetInput`<sup>Optional</sup> <a name="cpuTargetInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput"></a>

```typescript
public readonly cpuTargetInput: number;
```

- *Type:* number

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `storageTargetInput`<sup>Optional</sup> <a name="storageTargetInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput"></a>

```typescript
public readonly storageTargetInput: number;
```

- *Type:* number

---

##### `cpuTarget`<sup>Required</sup> <a name="cpuTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget"></a>

```typescript
public readonly cpuTarget: number;
```

- *Type:* number

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `storageTarget`<sup>Required</sup> <a name="storageTarget" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget"></a>

```typescript
public readonly storageTarget: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigtableInstanceClusterAutoscalingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---


### BigtableInstanceClusterList <a name="BigtableInstanceClusterList" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

new bigtableInstance.BigtableInstanceClusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.get"></a>

```typescript
public get(index: number): BigtableInstanceClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableInstanceCluster[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>[]

---


### BigtableInstanceClusterOutputReference <a name="BigtableInstanceClusterOutputReference" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

new bigtableInstance.BigtableInstanceClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNodeScalingFactor">resetNodeScalingFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNumNodes">resetNumNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig"></a>

```typescript
public putAutoscalingConfig(value: BigtableInstanceClusterAutoscalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetAutoscalingConfig"></a>

```typescript
public resetAutoscalingConfig(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetNodeScalingFactor` <a name="resetNodeScalingFactor" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNodeScalingFactor"></a>

```typescript
public resetNodeScalingFactor(): void
```

##### `resetNumNodes` <a name="resetNumNodes" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNumNodes"></a>

```typescript
public resetNumNodes(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference">BigtableInstanceClusterAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactorInput">nodeScalingFactorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodesInput">numNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactor">nodeScalingFactor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodes">numNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: BigtableInstanceClusterAutoscalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference">BigtableInstanceClusterAutoscalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfigInput"></a>

```typescript
public readonly autoscalingConfigInput: BigtableInstanceClusterAutoscalingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `nodeScalingFactorInput`<sup>Optional</sup> <a name="nodeScalingFactorInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactorInput"></a>

```typescript
public readonly nodeScalingFactorInput: string;
```

- *Type:* string

---

##### `numNodesInput`<sup>Optional</sup> <a name="numNodesInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodesInput"></a>

```typescript
public readonly numNodesInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `nodeScalingFactor`<sup>Required</sup> <a name="nodeScalingFactor" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.nodeScalingFactor"></a>

```typescript
public readonly nodeScalingFactor: string;
```

- *Type:* string

---

##### `numNodes`<sup>Required</sup> <a name="numNodes" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodes"></a>

```typescript
public readonly numNodes: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableInstanceCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceCluster">BigtableInstanceCluster</a>

---


### BigtableInstanceTimeoutsOutputReference <a name="BigtableInstanceTimeoutsOutputReference" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigtableInstance } from '@cdktn/provider-google'

new bigtableInstance.BigtableInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigtableInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableInstance.BigtableInstanceTimeouts">BigtableInstanceTimeouts</a>

---



