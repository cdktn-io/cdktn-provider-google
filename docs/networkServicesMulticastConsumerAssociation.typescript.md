# `networkServicesMulticastConsumerAssociation` Submodule <a name="`networkServicesMulticastConsumerAssociation` Submodule" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastConsumerAssociation <a name="NetworkServicesMulticastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association google_network_services_multicast_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.Initializer"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

new networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation(scope: Construct, id: string, config: NetworkServicesMulticastConsumerAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig">NetworkServicesMulticastConsumerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig">NetworkServicesMulticastConsumerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesMulticastConsumerAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts">NetworkServicesMulticastConsumerAssociationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastConsumerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isConstruct"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformElement"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformResource"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.generateConfigForImport"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesMulticastConsumerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesMulticastConsumerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesMulticastConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.placementPolicy">placementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList">NetworkServicesMulticastConsumerAssociationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput">multicastConsumerAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput">multicastDomainActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts">NetworkServicesMulticastConsumerAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId">multicastConsumerAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation">multicastDomainActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `placementPolicy`<sup>Required</sup> <a name="placementPolicy" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.placementPolicy"></a>

```typescript
public readonly placementPolicy: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.state"></a>

```typescript
public readonly state: NetworkServicesMulticastConsumerAssociationStateList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList">NetworkServicesMulticastConsumerAssociationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multicastConsumerAssociationIdInput`<sup>Optional</sup> <a name="multicastConsumerAssociationIdInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput"></a>

```typescript
public readonly multicastConsumerAssociationIdInput: string;
```

- *Type:* string

---

##### `multicastDomainActivationInput`<sup>Optional</sup> <a name="multicastDomainActivationInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput"></a>

```typescript
public readonly multicastDomainActivationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesMulticastConsumerAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts">NetworkServicesMulticastConsumerAssociationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastConsumerAssociationId`<sup>Required</sup> <a name="multicastConsumerAssociationId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId"></a>

```typescript
public readonly multicastConsumerAssociationId: string;
```

- *Type:* string

---

##### `multicastDomainActivation`<sup>Required</sup> <a name="multicastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation"></a>

```typescript
public readonly multicastDomainActivation: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastConsumerAssociationConfig <a name="NetworkServicesMulticastConsumerAssociationConfig" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.Initializer"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

const networkServicesMulticastConsumerAssociationConfig: networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId">multicastConsumerAssociationId</a></code> | <code>string</code> | A unique name for the multicast consumer association. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation">multicastDomainActivation</a></code> | <code>string</code> | The resource name of the multicast domain activation that is in the same zone as this multicast consumer association. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.network">network</a></code> | <code>string</code> | The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast consumer association. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#id NetworkServicesMulticastConsumerAssociation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#project NetworkServicesMulticastConsumerAssociation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts">NetworkServicesMulticastConsumerAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#location NetworkServicesMulticastConsumerAssociation#location}

---

##### `multicastConsumerAssociationId`<sup>Required</sup> <a name="multicastConsumerAssociationId" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId"></a>

```typescript
public readonly multicastConsumerAssociationId: string;
```

- *Type:* string

A unique name for the multicast consumer association.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#multicast_consumer_association_id NetworkServicesMulticastConsumerAssociation#multicast_consumer_association_id}

---

##### `multicastDomainActivation`<sup>Required</sup> <a name="multicastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation"></a>

```typescript
public readonly multicastDomainActivation: string;
```

- *Type:* string

The resource name of the multicast domain activation that is in the same zone as this multicast consumer association.

Use the following format:
// 'projects/* /locations/* /multicastDomainActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#multicast_domain_activation NetworkServicesMulticastConsumerAssociation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#network NetworkServicesMulticastConsumerAssociation#network}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#deletion_policy NetworkServicesMulticastConsumerAssociation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast consumer association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#description NetworkServicesMulticastConsumerAssociation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#id NetworkServicesMulticastConsumerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#labels NetworkServicesMulticastConsumerAssociation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#project NetworkServicesMulticastConsumerAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMulticastConsumerAssociationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts">NetworkServicesMulticastConsumerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#timeouts NetworkServicesMulticastConsumerAssociation#timeouts}

---

### NetworkServicesMulticastConsumerAssociationState <a name="NetworkServicesMulticastConsumerAssociationState" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationState.Initializer"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

const networkServicesMulticastConsumerAssociationState: networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationState = { ... }
```


### NetworkServicesMulticastConsumerAssociationTimeouts <a name="NetworkServicesMulticastConsumerAssociationTimeouts" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts.Initializer"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

const networkServicesMulticastConsumerAssociationTimeouts: networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#create NetworkServicesMulticastConsumerAssociation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#delete NetworkServicesMulticastConsumerAssociation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#update NetworkServicesMulticastConsumerAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#create NetworkServicesMulticastConsumerAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#delete NetworkServicesMulticastConsumerAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/network_services_multicast_consumer_association#update NetworkServicesMulticastConsumerAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastConsumerAssociationStateList <a name="NetworkServicesMulticastConsumerAssociationStateList" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.Initializer"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

new networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.get"></a>

```typescript
public get(index: number): NetworkServicesMulticastConsumerAssociationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkServicesMulticastConsumerAssociationStateOutputReference <a name="NetworkServicesMulticastConsumerAssociationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

new networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationState">NetworkServicesMulticastConsumerAssociationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesMulticastConsumerAssociationState;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationState">NetworkServicesMulticastConsumerAssociationState</a>

---


### NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference <a name="NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastConsumerAssociation } from '@cdktn/provider-google'

new networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts">NetworkServicesMulticastConsumerAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesMulticastConsumerAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastConsumerAssociation.NetworkServicesMulticastConsumerAssociationTimeouts">NetworkServicesMulticastConsumerAssociationTimeouts</a>

---



