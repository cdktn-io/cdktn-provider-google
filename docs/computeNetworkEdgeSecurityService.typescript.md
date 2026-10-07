# `computeNetworkEdgeSecurityService` Submodule <a name="`computeNetworkEdgeSecurityService` Submodule" id="@cdktn/provider-google.computeNetworkEdgeSecurityService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEdgeSecurityService <a name="ComputeNetworkEdgeSecurityService" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service google_compute_network_edge_security_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

new computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService(scope: Construct, id: string, config: ComputeNetworkEdgeSecurityServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig">ComputeNetworkEdgeSecurityServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig">ComputeNetworkEdgeSecurityServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeNetworkEdgeSecurityServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeNetworkEdgeSecurityService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isConstruct"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformElement"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformResource"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeNetworkEdgeSecurityService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkEdgeSecurityService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkEdgeSecurityService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetworkEdgeSecurityService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId">selfLinkWithServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithServiceId`<sup>Required</sup> <a name="selfLinkWithServiceId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId"></a>

```typescript
public readonly selfLinkWithServiceId: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeNetworkEdgeSecurityServiceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEdgeSecurityServiceConfig <a name="ComputeNetworkEdgeSecurityServiceConfig" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.Initializer"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

const computeNetworkEdgeSecurityServiceConfig: computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.description">description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#id ComputeNetworkEdgeSecurityService#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#project ComputeNetworkEdgeSecurityService#project}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.region">region</a></code> | <code>string</code> | The region of the gateway security policy. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | The resource URL for the network edge security service associated with this network edge security service. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#name ComputeNetworkEdgeSecurityService#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#deletion_policy ComputeNetworkEdgeSecurityService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#description ComputeNetworkEdgeSecurityService#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#id ComputeNetworkEdgeSecurityService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#project ComputeNetworkEdgeSecurityService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#region ComputeNetworkEdgeSecurityService#region}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

The resource URL for the network edge security service associated with this network edge security service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#security_policy ComputeNetworkEdgeSecurityService#security_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkEdgeSecurityServiceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#timeouts ComputeNetworkEdgeSecurityService#timeouts}

---

### ComputeNetworkEdgeSecurityServiceTimeouts <a name="ComputeNetworkEdgeSecurityServiceTimeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.Initializer"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

const computeNetworkEdgeSecurityServiceTimeouts: computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#create ComputeNetworkEdgeSecurityService#create}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#delete ComputeNetworkEdgeSecurityService#delete}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#update ComputeNetworkEdgeSecurityService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#create ComputeNetworkEdgeSecurityService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#delete ComputeNetworkEdgeSecurityService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#update ComputeNetworkEdgeSecurityService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference <a name="ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeNetworkEdgeSecurityService } from '@cdktn/provider-google'

new computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkEdgeSecurityServiceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

---



