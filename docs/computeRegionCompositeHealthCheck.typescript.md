# `computeRegionCompositeHealthCheck` Submodule <a name="`computeRegionCompositeHealthCheck` Submodule" id="@cdktn/provider-google.computeRegionCompositeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionCompositeHealthCheck <a name="ComputeRegionCompositeHealthCheck" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check google_compute_region_composite_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

new computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck(scope: Construct, id: string, config: ComputeRegionCompositeHealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig">ComputeRegionCompositeHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig">ComputeRegionCompositeHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetHealthSources">resetHealthSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionCompositeHealthCheckTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHealthSources` <a name="resetHealthSources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetHealthSources"></a>

```typescript
public resetHealthSources(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionCompositeHealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeRegionCompositeHealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionCompositeHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionCompositeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionCompositeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference">ComputeRegionCompositeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestinationInput">healthDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSourcesInput">healthSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestination">healthDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSources">healthSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionCompositeHealthCheckTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference">ComputeRegionCompositeHealthCheckTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `healthDestinationInput`<sup>Optional</sup> <a name="healthDestinationInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestinationInput"></a>

```typescript
public readonly healthDestinationInput: string;
```

- *Type:* string

---

##### `healthSourcesInput`<sup>Optional</sup> <a name="healthSourcesInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSourcesInput"></a>

```typescript
public readonly healthSourcesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionCompositeHealthCheckTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthDestination`<sup>Required</sup> <a name="healthDestination" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestination"></a>

```typescript
public readonly healthDestination: string;
```

- *Type:* string

---

##### `healthSources`<sup>Required</sup> <a name="healthSources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSources"></a>

```typescript
public readonly healthSources: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionCompositeHealthCheckConfig <a name="ComputeRegionCompositeHealthCheckConfig" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.Initializer"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

const computeRegionCompositeHealthCheckConfig: computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthDestination">healthDestination</a></code> | <code>string</code> | URL to the destination resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.region">region</a></code> | <code>string</code> | URL of the region where the composite health check resides. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthSources">healthSources</a></code> | <code>string[]</code> | URLs to the HealthSource resources whose results are AND'ed. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `healthDestination`<sup>Required</sup> <a name="healthDestination" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthDestination"></a>

```typescript
public readonly healthDestination: string;
```

- *Type:* string

URL to the destination resource.

Must be set. Must be a
ForwardingRule. The ForwardingRule must have
load balancing scheme INTERNAL or
INTERNAL_MANAGED and must be regional and in the same region
as the CompositeHealthCheck (cross-region deployment for
INTERNAL_MANAGED is not supported). Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#health_destination ComputeRegionCompositeHealthCheck#health_destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#name ComputeRegionCompositeHealthCheck#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

URL of the region where the composite health check resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#region ComputeRegionCompositeHealthCheck#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#deletion_policy ComputeRegionCompositeHealthCheck#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#description ComputeRegionCompositeHealthCheck#description}

---

##### `healthSources`<sup>Optional</sup> <a name="healthSources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthSources"></a>

```typescript
public readonly healthSources: string[];
```

- *Type:* string[]

URLs to the HealthSource resources whose results are AND'ed.

I.e. he aggregated result is is HEALTHY only if all sources
are HEALTHY. Must have at least 1. Must not have more than 10.
Must be regional and in the same region as the
CompositeHealthCheck. Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#health_sources ComputeRegionCompositeHealthCheck#health_sources}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionCompositeHealthCheckTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#timeouts ComputeRegionCompositeHealthCheck#timeouts}

---

### ComputeRegionCompositeHealthCheckTimeouts <a name="ComputeRegionCompositeHealthCheckTimeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.Initializer"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

const computeRegionCompositeHealthCheckTimeouts: computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#create ComputeRegionCompositeHealthCheck#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#delete ComputeRegionCompositeHealthCheck#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#update ComputeRegionCompositeHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#create ComputeRegionCompositeHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#delete ComputeRegionCompositeHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_region_composite_health_check#update ComputeRegionCompositeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionCompositeHealthCheckTimeoutsOutputReference <a name="ComputeRegionCompositeHealthCheckTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionCompositeHealthCheck } from '@cdktn/provider-google'

new computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionCompositeHealthCheckTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---



