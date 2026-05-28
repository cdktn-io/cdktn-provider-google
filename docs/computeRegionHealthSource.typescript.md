# `computeRegionHealthSource` Submodule <a name="`computeRegionHealthSource` Submodule" id="@cdktn/provider-google.computeRegionHealthSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionHealthSource <a name="ComputeRegionHealthSource" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source google_compute_region_health_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.Initializer"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

new computeRegionHealthSource.ComputeRegionHealthSource(scope: Construct, id: string, config: ComputeRegionHealthSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig">ComputeRegionHealthSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig">ComputeRegionHealthSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetHealthAggregationPolicy">resetHealthAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionHealthSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts">ComputeRegionHealthSourceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHealthAggregationPolicy` <a name="resetHealthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetHealthAggregationPolicy"></a>

```typescript
public resetHealthAggregationPolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetSources"></a>

```typescript
public resetSources(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionHealthSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isConstruct"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

computeRegionHealthSource.ComputeRegionHealthSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isTerraformElement"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

computeRegionHealthSource.ComputeRegionHealthSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isTerraformResource"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

computeRegionHealthSource.ComputeRegionHealthSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.generateConfigForImport"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

computeRegionHealthSource.ComputeRegionHealthSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeRegionHealthSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionHealthSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionHealthSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionHealthSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference">ComputeRegionHealthSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.healthAggregationPolicyInput">healthAggregationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sourcesInput">sourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts">ComputeRegionHealthSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.healthAggregationPolicy">healthAggregationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sources">sources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionHealthSourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference">ComputeRegionHealthSourceTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `healthAggregationPolicyInput`<sup>Optional</sup> <a name="healthAggregationPolicyInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.healthAggregationPolicyInput"></a>

```typescript
public readonly healthAggregationPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: string[];
```

- *Type:* string[]

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionHealthSourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts">ComputeRegionHealthSourceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthAggregationPolicy`<sup>Required</sup> <a name="healthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.healthAggregationPolicy"></a>

```typescript
public readonly healthAggregationPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionHealthSourceConfig <a name="ComputeRegionHealthSourceConfig" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.Initializer"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

const computeRegionHealthSourceConfig: computeRegionHealthSource.ComputeRegionHealthSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.region">region</a></code> | <code>string</code> | URL of the region where the health source resides. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Specifies the type of the 'HealthSource'. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.healthAggregationPolicy">healthAggregationPolicy</a></code> | <code>string</code> | URL to the 'HealthAggregationPolicy' resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#project ComputeRegionHealthSource#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.sources">sources</a></code> | <code>string[]</code> | URLs to the source resources. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts">ComputeRegionHealthSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#name ComputeRegionHealthSource#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

URL of the region where the health source resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#region ComputeRegionHealthSource#region}

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Specifies the type of the 'HealthSource'.

The only allowed value
is 'BACKEND_SERVICE'. Must be specified when the
'HealthSource' is created, and cannot be mutated. Possible values: ["BACKEND_SERVICE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#source_type ComputeRegionHealthSource#source_type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#deletion_policy ComputeRegionHealthSource#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#description ComputeRegionHealthSource#description}

---

##### `healthAggregationPolicy`<sup>Optional</sup> <a name="healthAggregationPolicy" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.healthAggregationPolicy"></a>

```typescript
public readonly healthAggregationPolicy: string;
```

- *Type:* string

URL to the 'HealthAggregationPolicy' resource.

Must be set. Must
be regional and in the same region as the 'HealthSource'. Can be
mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#health_aggregation_policy ComputeRegionHealthSource#health_aggregation_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#project ComputeRegionHealthSource#project}.

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.sources"></a>

```typescript
public readonly sources: string[];
```

- *Type:* string[]

URLs to the source resources.

Must be size 1. Must be a
'BackendService' if the 'sourceType' is 'BACKEND_SERVICE'. The
'BackendService' must have load balancing scheme
'INTERNAL' or 'INTERNAL_MANAGED' and must be regional
and in the same region as the 'HealthSource' (cross-region
deployment for 'INTERNAL_MANAGED' is not supported). The
'BackendService' may use only IGs, MIGs, or NEGs of type
'GCE_VM_IP' or 'GCE_VM_IP_PORT'. The
'BackendService' may not use 'haPolicy'. Can be
mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#sources ComputeRegionHealthSource#sources}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionHealthSourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts">ComputeRegionHealthSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#timeouts ComputeRegionHealthSource#timeouts}

---

### ComputeRegionHealthSourceTimeouts <a name="ComputeRegionHealthSourceTimeouts" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts.Initializer"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

const computeRegionHealthSourceTimeouts: computeRegionHealthSource.ComputeRegionHealthSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#create ComputeRegionHealthSource#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#delete ComputeRegionHealthSource#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#update ComputeRegionHealthSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#create ComputeRegionHealthSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#delete ComputeRegionHealthSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_health_source#update ComputeRegionHealthSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionHealthSourceTimeoutsOutputReference <a name="ComputeRegionHealthSourceTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionHealthSource } from '@cdktn/provider-google'

new computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts">ComputeRegionHealthSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionHealthSourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionHealthSource.ComputeRegionHealthSourceTimeouts">ComputeRegionHealthSourceTimeouts</a>

---



