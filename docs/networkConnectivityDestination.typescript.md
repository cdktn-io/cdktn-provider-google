# `networkConnectivityDestination` Submodule <a name="`networkConnectivityDestination` Submodule" id="@cdktn/provider-google.networkConnectivityDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityDestination <a name="NetworkConnectivityDestination" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination google_network_connectivity_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestination(scope: Construct, id: string, config: NetworkConnectivityDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig">NetworkConnectivityDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig">NetworkConnectivityDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | NetworkConnectivityDestinationEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivityDestinationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isConstruct"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

networkConnectivityDestination.NetworkConnectivityDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformElement"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

networkConnectivityDestination.NetworkConnectivityDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformResource"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

networkConnectivityDestination.NetworkConnectivityDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkConnectivityDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList">NetworkConnectivityDestinationEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.stateTimeline">stateTimeline</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList">NetworkConnectivityDestinationStateTimelineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference">NetworkConnectivityDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpointsInput">endpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefixInput">ipPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfigInput">multicloudDataTransferConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefix">ipPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfig">multicloudDataTransferConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpoints"></a>

```typescript
public readonly endpoints: NetworkConnectivityDestinationEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList">NetworkConnectivityDestinationEndpointsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `stateTimeline`<sup>Required</sup> <a name="stateTimeline" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.stateTimeline"></a>

```typescript
public readonly stateTimeline: NetworkConnectivityDestinationStateTimelineList;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList">NetworkConnectivityDestinationStateTimelineList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityDestinationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference">NetworkConnectivityDestinationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | NetworkConnectivityDestinationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipPrefixInput`<sup>Optional</sup> <a name="ipPrefixInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefixInput"></a>

```typescript
public readonly ipPrefixInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multicloudDataTransferConfigInput`<sup>Optional</sup> <a name="multicloudDataTransferConfigInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfigInput"></a>

```typescript
public readonly multicloudDataTransferConfigInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivityDestinationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipPrefix`<sup>Required</sup> <a name="ipPrefix" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.ipPrefix"></a>

```typescript
public readonly ipPrefix: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicloudDataTransferConfig`<sup>Required</sup> <a name="multicloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.multicloudDataTransferConfig"></a>

```typescript
public readonly multicloudDataTransferConfig: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityDestinationConfig <a name="NetworkConnectivityDestinationConfig" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

const networkConnectivityDestinationConfig: networkConnectivityDestination.NetworkConnectivityDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.endpoints">endpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.ipPrefix">ipPrefix</a></code> | <code>string</code> | The IP prefix that represents your workload on another CSP. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.location">location</a></code> | <code>string</code> | The location of the destination. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.multicloudDataTransferConfig">multicloudDataTransferConfig</a></code> | <code>string</code> | The multicloud data transfer config of the destination. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.name">name</a></code> | <code>string</code> | The name of the destination. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.description">description</a></code> | <code>string</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#id NetworkConnectivityDestination#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#project NetworkConnectivityDestination#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | NetworkConnectivityDestinationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#endpoints NetworkConnectivityDestination#endpoints}

---

##### `ipPrefix`<sup>Required</sup> <a name="ipPrefix" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.ipPrefix"></a>

```typescript
public readonly ipPrefix: string;
```

- *Type:* string

The IP prefix that represents your workload on another CSP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#ip_prefix NetworkConnectivityDestination#ip_prefix}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#location NetworkConnectivityDestination#location}

---

##### `multicloudDataTransferConfig`<sup>Required</sup> <a name="multicloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.multicloudDataTransferConfig"></a>

```typescript
public readonly multicloudDataTransferConfig: string;
```

- *Type:* string

The multicloud data transfer config of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#multicloud_data_transfer_config NetworkConnectivityDestination#multicloud_data_transfer_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#name NetworkConnectivityDestination#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#deletion_policy NetworkConnectivityDestination#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#description NetworkConnectivityDestination#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#id NetworkConnectivityDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#labels NetworkConnectivityDestination#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#project NetworkConnectivityDestination#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityDestinationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#timeouts NetworkConnectivityDestination#timeouts}

---

### NetworkConnectivityDestinationEndpoints <a name="NetworkConnectivityDestinationEndpoints" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

const networkConnectivityDestinationEndpoints: networkConnectivityDestination.NetworkConnectivityDestinationEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.asn">asn</a></code> | <code>string</code> | The ASN of the remote IP prefix. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.csp">csp</a></code> | <code>string</code> | The CSP of the remote IP prefix. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

The ASN of the remote IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#asn NetworkConnectivityDestination#asn}

---

##### `csp`<sup>Required</sup> <a name="csp" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints.property.csp"></a>

```typescript
public readonly csp: string;
```

- *Type:* string

The CSP of the remote IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#csp NetworkConnectivityDestination#csp}

---

### NetworkConnectivityDestinationStateTimeline <a name="NetworkConnectivityDestinationStateTimeline" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

const networkConnectivityDestinationStateTimeline: networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline = { ... }
```


### NetworkConnectivityDestinationStateTimelineStates <a name="NetworkConnectivityDestinationStateTimelineStates" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

const networkConnectivityDestinationStateTimelineStates: networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates = { ... }
```


### NetworkConnectivityDestinationTimeouts <a name="NetworkConnectivityDestinationTimeouts" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

const networkConnectivityDestinationTimeouts: networkConnectivityDestination.NetworkConnectivityDestinationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#create NetworkConnectivityDestination#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#delete NetworkConnectivityDestination#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#update NetworkConnectivityDestination#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#create NetworkConnectivityDestination#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#delete NetworkConnectivityDestination#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_connectivity_destination#update NetworkConnectivityDestination#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityDestinationEndpointsList <a name="NetworkConnectivityDestinationEndpointsList" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.get"></a>

```typescript
public get(index: number): NetworkConnectivityDestinationEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityDestinationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>[]

---


### NetworkConnectivityDestinationEndpointsOutputReference <a name="NetworkConnectivityDestinationEndpointsOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asnInput">asnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.cspInput">cspInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asn">asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.csp">csp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asnInput"></a>

```typescript
public readonly asnInput: string;
```

- *Type:* string

---

##### `cspInput`<sup>Optional</sup> <a name="cspInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.cspInput"></a>

```typescript
public readonly cspInput: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

---

##### `csp`<sup>Required</sup> <a name="csp" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.csp"></a>

```typescript
public readonly csp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityDestinationEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationEndpoints">NetworkConnectivityDestinationEndpoints</a>

---


### NetworkConnectivityDestinationStateTimelineList <a name="NetworkConnectivityDestinationStateTimelineList" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.get"></a>

```typescript
public get(index: number): NetworkConnectivityDestinationStateTimelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkConnectivityDestinationStateTimelineOutputReference <a name="NetworkConnectivityDestinationStateTimelineOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.states">states</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList">NetworkConnectivityDestinationStateTimelineStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline">NetworkConnectivityDestinationStateTimeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.states"></a>

```typescript
public readonly states: NetworkConnectivityDestinationStateTimelineStatesList;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList">NetworkConnectivityDestinationStateTimelineStatesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityDestinationStateTimeline;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimeline">NetworkConnectivityDestinationStateTimeline</a>

---


### NetworkConnectivityDestinationStateTimelineStatesList <a name="NetworkConnectivityDestinationStateTimelineStatesList" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.get"></a>

```typescript
public get(index: number): NetworkConnectivityDestinationStateTimelineStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkConnectivityDestinationStateTimelineStatesOutputReference <a name="NetworkConnectivityDestinationStateTimelineStatesOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates">NetworkConnectivityDestinationStateTimelineStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityDestinationStateTimelineStates;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationStateTimelineStates">NetworkConnectivityDestinationStateTimelineStates</a>

---


### NetworkConnectivityDestinationTimeoutsOutputReference <a name="NetworkConnectivityDestinationTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityDestination } from '@cdktn/provider-google'

new networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityDestinationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityDestination.NetworkConnectivityDestinationTimeouts">NetworkConnectivityDestinationTimeouts</a>

---



