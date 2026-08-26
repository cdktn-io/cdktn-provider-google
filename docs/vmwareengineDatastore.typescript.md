# `vmwareengineDatastore` Submodule <a name="`vmwareengineDatastore` Submodule" id="@cdktn/provider-google.vmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineDatastore <a name="VmwareengineDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

new vmwareengineDatastore.VmwareengineDatastore(scope: Construct, id: string, config: VmwareengineDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig">VmwareengineDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig">VmwareengineDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore">putNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNfsDatastore` <a name="putNfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore"></a>

```typescript
public putNfsDatastore(value: VmwareengineDatastoreNfsDatastore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts"></a>

```typescript
public putTimeouts(value: VmwareengineDatastoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

vmwareengineDatastore.VmwareengineDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

vmwareengineDatastore.VmwareengineDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

vmwareengineDatastore.VmwareengineDatastore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmwareengineDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters">clusters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput">nfsDatastoreInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters"></a>

```typescript
public readonly clusters: string[];
```

- *Type:* string[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore"></a>

```typescript
public readonly nfsDatastore: VmwareengineDatastoreNfsDatastoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineDatastoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsDatastoreInput`<sup>Optional</sup> <a name="nfsDatastoreInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput"></a>

```typescript
public readonly nfsDatastoreInput: VmwareengineDatastoreNfsDatastore;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VmwareengineDatastoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineDatastoreConfig <a name="VmwareengineDatastoreConfig" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

const vmwareengineDatastoreConfig: vmwareengineDatastore.VmwareengineDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name">name</a></code> | <code>string</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description">description</a></code> | <code>string</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#location VmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
(section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#name VmwareengineDatastore#name}

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore"></a>

```typescript
public readonly nfsDatastore: VmwareengineDatastoreNfsDatastore;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#nfs_datastore VmwareengineDatastore#nfs_datastore}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#deletion_policy VmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#description VmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineDatastoreTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#timeouts VmwareengineDatastore#timeouts}

---

### VmwareengineDatastoreNfsDatastore <a name="VmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

const vmwareengineDatastoreNfsDatastore: vmwareengineDatastore.VmwareengineDatastoreNfsDatastore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService">googleFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | google_file_service block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService">thirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | third_party_file_service block. |

---

##### `googleFileService`<sup>Optional</sup> <a name="googleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService"></a>

```typescript
public readonly googleFileService: VmwareengineDatastoreNfsDatastoreGoogleFileService;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#google_file_service VmwareengineDatastore#google_file_service}

---

##### `thirdPartyFileService`<sup>Optional</sup> <a name="thirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService"></a>

```typescript
public readonly thirdPartyFileService: VmwareengineDatastoreNfsDatastoreThirdPartyFileService;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#third_party_file_service VmwareengineDatastore#third_party_file_service}

---

### VmwareengineDatastoreNfsDatastoreGoogleFileService <a name="VmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

const vmwareengineDatastoreNfsDatastoreGoogleFileService: vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance">filestoreInstance</a></code> | <code>string</code> | Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume">netappVolume</a></code> | <code>string</code> | Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume. |

---

##### `filestoreInstance`<sup>Optional</sup> <a name="filestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance"></a>

```typescript
public readonly filestoreInstance: string;
```

- *Type:* string

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#filestore_instance VmwareengineDatastore#filestore_instance}

---

##### `netappVolume`<sup>Optional</sup> <a name="netappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume"></a>

```typescript
public readonly netappVolume: string;
```

- *Type:* string

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#netapp_volume VmwareengineDatastore#netapp_volume}

---

### VmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

const vmwareengineDatastoreNfsDatastoreThirdPartyFileService: vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare">fileShare</a></code> | <code>string</code> | Required Mount Folder name. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network">network</a></code> | <code>string</code> | Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers">servers</a></code> | <code>string[]</code> | Server IP addresses of the NFS file service. |

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare"></a>

```typescript
public readonly fileShare: string;
```

- *Type:* string

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#file_share VmwareengineDatastore#file_share}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#network VmwareengineDatastore#network}

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#servers VmwareengineDatastore#servers}

---

### VmwareengineDatastoreTimeouts <a name="VmwareengineDatastoreTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

const vmwareengineDatastoreTimeouts: vmwareengineDatastore.VmwareengineDatastoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

new vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance">resetFilestoreInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume">resetNetappVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilestoreInstance` <a name="resetFilestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance"></a>

```typescript
public resetFilestoreInstance(): void
```

##### `resetNetappVolume` <a name="resetNetappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume"></a>

```typescript
public resetNetappVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput">filestoreInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput">netappVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">filestoreInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">netappVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filestoreInstanceInput`<sup>Optional</sup> <a name="filestoreInstanceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput"></a>

```typescript
public readonly filestoreInstanceInput: string;
```

- *Type:* string

---

##### `netappVolumeInput`<sup>Optional</sup> <a name="netappVolumeInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput"></a>

```typescript
public readonly netappVolumeInput: string;
```

- *Type:* string

---

##### `filestoreInstance`<sup>Required</sup> <a name="filestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```typescript
public readonly filestoreInstance: string;
```

- *Type:* string

---

##### `netappVolume`<sup>Required</sup> <a name="netappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```typescript
public readonly netappVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VmwareengineDatastoreNfsDatastoreGoogleFileService;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### VmwareengineDatastoreNfsDatastoreOutputReference <a name="VmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

new vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService">putGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService">putThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService">resetGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService">resetThirdPartyFileService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoogleFileService` <a name="putGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService"></a>

```typescript
public putGoogleFileService(value: VmwareengineDatastoreNfsDatastoreGoogleFileService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `putThirdPartyFileService` <a name="putThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService"></a>

```typescript
public putThirdPartyFileService(value: VmwareengineDatastoreNfsDatastoreThirdPartyFileService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `resetGoogleFileService` <a name="resetGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService"></a>

```typescript
public resetGoogleFileService(): void
```

##### `resetThirdPartyFileService` <a name="resetThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService"></a>

```typescript
public resetThirdPartyFileService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">googleFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">thirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput">googleFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput">thirdPartyFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleFileService`<sup>Required</sup> <a name="googleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```typescript
public readonly googleFileService: VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a>

---

##### `thirdPartyFileService`<sup>Required</sup> <a name="thirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```typescript
public readonly thirdPartyFileService: VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a>

---

##### `googleFileServiceInput`<sup>Optional</sup> <a name="googleFileServiceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput"></a>

```typescript
public readonly googleFileServiceInput: VmwareengineDatastoreNfsDatastoreGoogleFileService;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `thirdPartyFileServiceInput`<sup>Optional</sup> <a name="thirdPartyFileServiceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput"></a>

```typescript
public readonly thirdPartyFileServiceInput: VmwareengineDatastoreNfsDatastoreThirdPartyFileService;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VmwareengineDatastoreNfsDatastore;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---


### VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

new vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput">fileShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput">serversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">fileShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileShareInput`<sup>Optional</sup> <a name="fileShareInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput"></a>

```typescript
public readonly fileShareInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput"></a>

```typescript
public readonly serversInput: string[];
```

- *Type:* string[]

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```typescript
public readonly fileShare: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VmwareengineDatastoreNfsDatastoreThirdPartyFileService;
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---


### VmwareengineDatastoreTimeoutsOutputReference <a name="VmwareengineDatastoreTimeoutsOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { vmwareengineDatastore } from '@cdktn/provider-google'

new vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineDatastoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---



