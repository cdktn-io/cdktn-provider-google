# `computeRouterNamedSet` Submodule <a name="`computeRouterNamedSet` Submodule" id="@cdktn/provider-google.computeRouterNamedSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterNamedSet <a name="ComputeRouterNamedSet" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set google_compute_router_named_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.Initializer"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

new computeRouterNamedSet.ComputeRouterNamedSet(scope: Construct, id: string, config: ComputeRouterNamedSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig">ComputeRouterNamedSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig">ComputeRouterNamedSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.putElements">putElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetElements">resetElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElements` <a name="putElements" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.putElements"></a>

```typescript
public putElements(value: IResolvable | ComputeRouterNamedSetElements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.putElements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRouterNamedSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts">ComputeRouterNamedSetTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetElements` <a name="resetElements" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetElements"></a>

```typescript
public resetElements(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRouterNamedSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isConstruct"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

computeRouterNamedSet.ComputeRouterNamedSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isTerraformElement"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

computeRouterNamedSet.ComputeRouterNamedSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isTerraformResource"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

computeRouterNamedSet.ComputeRouterNamedSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.generateConfigForImport"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

computeRouterNamedSet.ComputeRouterNamedSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeRouterNamedSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRouterNamedSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRouterNamedSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRouterNamedSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList">ComputeRouterNamedSetElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference">ComputeRouterNamedSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.elementsInput">elementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts">ComputeRouterNamedSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.elements"></a>

```typescript
public readonly elements: ComputeRouterNamedSetElementsList;
```

- *Type:* <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList">ComputeRouterNamedSetElementsList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterNamedSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference">ComputeRouterNamedSetTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `elementsInput`<sup>Optional</sup> <a name="elementsInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.elementsInput"></a>

```typescript
public readonly elementsInput: IResolvable | ComputeRouterNamedSetElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRouterNamedSetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts">ComputeRouterNamedSetTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterNamedSetConfig <a name="ComputeRouterNamedSetConfig" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.Initializer"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

const computeRouterNamedSetConfig: computeRouterNamedSet.ComputeRouterNamedSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.name">name</a></code> | <code>string</code> | The name of the Named Set, which must be a resource ID segment and unique within all named sets owned by the Router. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.router">router</a></code> | <code>string</code> | The name of the Cloud Router in which this Named Set will be configured. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.type">type</a></code> | <code>string</code> | The type of the Named Set. Possible values: ["NAMED_SET_TYPE_PREFIX", "NAMED_SET_TYPE_COMMUNITY"]. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.description">description</a></code> | <code>string</code> | An optional description of the Named Set. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.elements">elements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>[]</code> | elements block. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#id ComputeRouterNamedSet#id}. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#project ComputeRouterNamedSet#project}. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.region">region</a></code> | <code>string</code> | Region where the router resides. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts">ComputeRouterNamedSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Named Set, which must be a resource ID segment and unique within all named sets owned by the Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#name ComputeRouterNamedSet#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The name of the Cloud Router in which this Named Set will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#router ComputeRouterNamedSet#router}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the Named Set. Possible values: ["NAMED_SET_TYPE_PREFIX", "NAMED_SET_TYPE_COMMUNITY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#type ComputeRouterNamedSet#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#deletion_policy ComputeRouterNamedSet#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the Named Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#description ComputeRouterNamedSet#description}

---

##### `elements`<sup>Optional</sup> <a name="elements" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.elements"></a>

```typescript
public readonly elements: IResolvable | ComputeRouterNamedSetElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>[]

elements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#elements ComputeRouterNamedSet#elements}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#id ComputeRouterNamedSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#project ComputeRouterNamedSet#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the router resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#region ComputeRouterNamedSet#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterNamedSetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts">ComputeRouterNamedSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#timeouts ComputeRouterNamedSet#timeouts}

---

### ComputeRouterNamedSetElements <a name="ComputeRouterNamedSetElements" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.Initializer"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

const computeRouterNamedSetElements: computeRouterNamedSet.ComputeRouterNamedSetElements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#expression ComputeRouterNamedSet#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#description ComputeRouterNamedSet#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#location ComputeRouterNamedSet#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#title ComputeRouterNamedSet#title}

---

### ComputeRouterNamedSetTimeouts <a name="ComputeRouterNamedSetTimeouts" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts.Initializer"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

const computeRouterNamedSetTimeouts: computeRouterNamedSet.ComputeRouterNamedSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#create ComputeRouterNamedSet#create}. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#delete ComputeRouterNamedSet#delete}. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#update ComputeRouterNamedSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#create ComputeRouterNamedSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#delete ComputeRouterNamedSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_router_named_set#update ComputeRouterNamedSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterNamedSetElementsList <a name="ComputeRouterNamedSetElementsList" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.Initializer"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

new computeRouterNamedSet.ComputeRouterNamedSetElementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.get"></a>

```typescript
public get(index: number): ComputeRouterNamedSetElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNamedSetElements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>[]

---


### ComputeRouterNamedSetElementsOutputReference <a name="ComputeRouterNamedSetElementsOutputReference" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

new computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNamedSetElements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetElements">ComputeRouterNamedSetElements</a>

---


### ComputeRouterNamedSetTimeoutsOutputReference <a name="ComputeRouterNamedSetTimeoutsOutputReference" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRouterNamedSet } from '@cdktn/provider-google'

new computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts">ComputeRouterNamedSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNamedSetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRouterNamedSet.ComputeRouterNamedSetTimeouts">ComputeRouterNamedSetTimeouts</a>

---



