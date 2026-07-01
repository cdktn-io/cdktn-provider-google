# `computeRegionInstantSnapshot` Submodule <a name="`computeRegionInstantSnapshot` Submodule" id="@cdktn/provider-google.computeRegionInstantSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionInstantSnapshot <a name="ComputeRegionInstantSnapshot" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot google_compute_region_instant_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

new computeRegionInstantSnapshot.ComputeRegionInstantSnapshot(scope: Construct, id: string, config: ComputeRegionInstantSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig">ComputeRegionInstantSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig">ComputeRegionInstantSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putParams"></a>

```typescript
public putParams(value: ComputeRegionInstantSnapshotParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionInstantSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionInstantSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isConstruct"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformElement"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformResource"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeRegionInstantSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionInstantSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionInstantSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionInstantSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference">ComputeRegionInstantSnapshotParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.resourceStatus">resourceStatus</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList">ComputeRegionInstantSnapshotResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskId">sourceDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroup">sourceInstantSnapshotGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroupId">sourceInstantSnapshotGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference">ComputeRegionInstantSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskInput">sourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.params"></a>

```typescript
public readonly params: ComputeRegionInstantSnapshotParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference">ComputeRegionInstantSnapshotParamsOutputReference</a>

---

##### `resourceStatus`<sup>Required</sup> <a name="resourceStatus" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.resourceStatus"></a>

```typescript
public readonly resourceStatus: ComputeRegionInstantSnapshotResourceStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList">ComputeRegionInstantSnapshotResourceStatusList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sourceDiskId`<sup>Required</sup> <a name="sourceDiskId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskId"></a>

```typescript
public readonly sourceDiskId: string;
```

- *Type:* string

---

##### `sourceInstantSnapshotGroup`<sup>Required</sup> <a name="sourceInstantSnapshotGroup" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroup"></a>

```typescript
public readonly sourceInstantSnapshotGroup: string;
```

- *Type:* string

---

##### `sourceInstantSnapshotGroupId`<sup>Required</sup> <a name="sourceInstantSnapshotGroupId" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroupId"></a>

```typescript
public readonly sourceInstantSnapshotGroupId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionInstantSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference">ComputeRegionInstantSnapshotTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.paramsInput"></a>

```typescript
public readonly paramsInput: ComputeRegionInstantSnapshotParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceDiskInput`<sup>Optional</sup> <a name="sourceDiskInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskInput"></a>

```typescript
public readonly sourceDiskInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionInstantSnapshotTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionInstantSnapshotConfig <a name="ComputeRegionInstantSnapshotConfig" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

const computeRegionInstantSnapshotConfig: computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | The source disk used to create this instant snapshot. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#id ComputeRegionInstantSnapshot#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this InstantSnapshot. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#project ComputeRegionInstantSnapshot#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.region">region</a></code> | <code>string</code> | A reference to the region where the disk is located. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#name ComputeRegionInstantSnapshot#name}

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

The source disk used to create this instant snapshot.

You can provide this as a partial or full URL to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#source_disk ComputeRegionInstantSnapshot#source_disk}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#deletion_policy ComputeRegionInstantSnapshot#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#description ComputeRegionInstantSnapshot#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#id ComputeRegionInstantSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this InstantSnapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#labels ComputeRegionInstantSnapshot#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.params"></a>

```typescript
public readonly params: ComputeRegionInstantSnapshotParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#params ComputeRegionInstantSnapshot#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#project ComputeRegionInstantSnapshot#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region where the disk is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#region ComputeRegionInstantSnapshot#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionInstantSnapshotTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#timeouts ComputeRegionInstantSnapshot#timeouts}

---

### ComputeRegionInstantSnapshotParams <a name="ComputeRegionInstantSnapshotParams" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

const computeRegionInstantSnapshotParams: computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags to be bound to the instant snapshot. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags to be bound to the instant snapshot.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#resource_manager_tags ComputeRegionInstantSnapshot#resource_manager_tags}

---

### ComputeRegionInstantSnapshotResourceStatus <a name="ComputeRegionInstantSnapshotResourceStatus" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

const computeRegionInstantSnapshotResourceStatus: computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus = { ... }
```


### ComputeRegionInstantSnapshotTimeouts <a name="ComputeRegionInstantSnapshotTimeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

const computeRegionInstantSnapshotTimeouts: computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#create ComputeRegionInstantSnapshot#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#delete ComputeRegionInstantSnapshot#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#update ComputeRegionInstantSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#create ComputeRegionInstantSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#delete ComputeRegionInstantSnapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_region_instant_snapshot#update ComputeRegionInstantSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionInstantSnapshotParamsOutputReference <a name="ComputeRegionInstantSnapshotParamsOutputReference" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

new computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstantSnapshotParams;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

---


### ComputeRegionInstantSnapshotResourceStatusList <a name="ComputeRegionInstantSnapshotResourceStatusList" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

new computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.get"></a>

```typescript
public get(index: number): ComputeRegionInstantSnapshotResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeRegionInstantSnapshotResourceStatusOutputReference <a name="ComputeRegionInstantSnapshotResourceStatusOutputReference" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

new computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.storageSizeBytes">storageSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus">ComputeRegionInstantSnapshotResourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageSizeBytes`<sup>Required</sup> <a name="storageSizeBytes" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.storageSizeBytes"></a>

```typescript
public readonly storageSizeBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstantSnapshotResourceStatus;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus">ComputeRegionInstantSnapshotResourceStatus</a>

---


### ComputeRegionInstantSnapshotTimeoutsOutputReference <a name="ComputeRegionInstantSnapshotTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionInstantSnapshot } from '@cdktn/provider-google'

new computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionInstantSnapshotTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

---



