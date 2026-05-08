# `networkServicesMulticastDomainActivation` Submodule <a name="`networkServicesMulticastDomainActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastDomainActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastDomainActivation <a name="NetworkServicesMulticastDomainActivation" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation google_network_services_multicast_domain_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

new networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation(scope: Construct, id: string, config: NetworkServicesMulticastDomainActivationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig">NetworkServicesMulticastDomainActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig">NetworkServicesMulticastDomainActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec">putTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy">resetDisablePlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec">resetTrafficSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesMulticastDomainActivationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `putTrafficSpec` <a name="putTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec"></a>

```typescript
public putTrafficSpec(value: NetworkServicesMulticastDomainActivationTrafficSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisablePlacementPolicy` <a name="resetDisablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy"></a>

```typescript
public resetDisablePlacementPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficSpec` <a name="resetTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.resetTrafficSpec"></a>

```typescript
public resetTrafficSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesMulticastDomainActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesMulticastDomainActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastDomainActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork">adminNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec">trafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput">disablePlacementPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput">multicastDomainActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput">multicastDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput">trafficSpecInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy">disablePlacementPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain">multicastDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId">multicastDomainActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `adminNetwork`<sup>Required</sup> <a name="adminNetwork" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.adminNetwork"></a>

```typescript
public readonly adminNetwork: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.state"></a>

```typescript
public readonly state: NetworkServicesMulticastDomainActivationStateList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList">NetworkServicesMulticastDomainActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMulticastDomainActivationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference">NetworkServicesMulticastDomainActivationTimeoutsOutputReference</a>

---

##### `trafficSpec`<sup>Required</sup> <a name="trafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpec"></a>

```typescript
public readonly trafficSpec: NetworkServicesMulticastDomainActivationTrafficSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference">NetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disablePlacementPolicyInput`<sup>Optional</sup> <a name="disablePlacementPolicyInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput"></a>

```typescript
public readonly disablePlacementPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multicastDomainActivationIdInput`<sup>Optional</sup> <a name="multicastDomainActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput"></a>

```typescript
public readonly multicastDomainActivationIdInput: string;
```

- *Type:* string

---

##### `multicastDomainInput`<sup>Optional</sup> <a name="multicastDomainInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainInput"></a>

```typescript
public readonly multicastDomainInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesMulticastDomainActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `trafficSpecInput`<sup>Optional</sup> <a name="trafficSpecInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.trafficSpecInput"></a>

```typescript
public readonly trafficSpecInput: NetworkServicesMulticastDomainActivationTrafficSpec;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disablePlacementPolicy`<sup>Required</sup> <a name="disablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.disablePlacementPolicy"></a>

```typescript
public readonly disablePlacementPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomain"></a>

```typescript
public readonly multicastDomain: string;
```

- *Type:* string

---

##### `multicastDomainActivationId`<sup>Required</sup> <a name="multicastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.multicastDomainActivationId"></a>

```typescript
public readonly multicastDomainActivationId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastDomainActivationConfig <a name="NetworkServicesMulticastDomainActivationConfig" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

const networkServicesMulticastDomainActivationConfig: networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain">multicastDomain</a></code> | <code>string</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId">multicastDomainActivationId</a></code> | <code>string</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy">disablePlacementPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec">trafficSpec</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#location NetworkServicesMulticastDomainActivation#location}

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomain"></a>

```typescript
public readonly multicastDomain: string;
```

- *Type:* string

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#multicast_domain NetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastDomainActivationId`<sup>Required</sup> <a name="multicastDomainActivationId" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId"></a>

```typescript
public readonly multicastDomainActivationId: string;
```

- *Type:* string

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#multicast_domain_activation_id NetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#description NetworkServicesMulticastDomainActivation#description}

---

##### `disablePlacementPolicy`<sup>Optional</sup> <a name="disablePlacementPolicy" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy"></a>

```typescript
public readonly disablePlacementPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#disable_placement_policy NetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#labels NetworkServicesMulticastDomainActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMulticastDomainActivationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#timeouts NetworkServicesMulticastDomainActivation#timeouts}

---

##### `trafficSpec`<sup>Optional</sup> <a name="trafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationConfig.property.trafficSpec"></a>

```typescript
public readonly trafficSpec: NetworkServicesMulticastDomainActivationTrafficSpec;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#traffic_spec NetworkServicesMulticastDomainActivation#traffic_spec}

---

### NetworkServicesMulticastDomainActivationState <a name="NetworkServicesMulticastDomainActivationState" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

const networkServicesMulticastDomainActivationState: networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState = { ... }
```


### NetworkServicesMulticastDomainActivationTimeouts <a name="NetworkServicesMulticastDomainActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

const networkServicesMulticastDomainActivationTimeouts: networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}.

---

### NetworkServicesMulticastDomainActivationTrafficSpec <a name="NetworkServicesMulticastDomainActivationTrafficSpec" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

const networkServicesMulticastDomainActivationTrafficSpec: networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps">aggrEgressPps</a></code> | <code>string</code> | Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps">aggrIngressPps</a></code> | <code>string</code> | Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize">avgPacketSize</a></code> | <code>number</code> | Average packet size (Default to 512 bytes). |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps">maxPerGroupIngressPps</a></code> | <code>string</code> | Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers">maxPerGroupSubscribers</a></code> | <code>string</code> | Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps). |

---

##### `aggrEgressPps`<sup>Optional</sup> <a name="aggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps"></a>

```typescript
public readonly aggrEgressPps: string;
```

- *Type:* string

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#aggr_egress_pps NetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

##### `aggrIngressPps`<sup>Optional</sup> <a name="aggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps"></a>

```typescript
public readonly aggrIngressPps: string;
```

- *Type:* string

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#aggr_ingress_pps NetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

##### `avgPacketSize`<sup>Optional</sup> <a name="avgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize"></a>

```typescript
public readonly avgPacketSize: number;
```

- *Type:* number

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#avg_packet_size NetworkServicesMulticastDomainActivation#avg_packet_size}

---

##### `maxPerGroupIngressPps`<sup>Optional</sup> <a name="maxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps"></a>

```typescript
public readonly maxPerGroupIngressPps: string;
```

- *Type:* string

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#max_per_group_ingress_pps NetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

##### `maxPerGroupSubscribers`<sup>Optional</sup> <a name="maxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers"></a>

```typescript
public readonly maxPerGroupSubscribers: string;
```

- *Type:* string

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/network_services_multicast_domain_activation#max_per_group_subscribers NetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastDomainActivationStateList <a name="NetworkServicesMulticastDomainActivationStateList" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

new networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get"></a>

```typescript
public get(index: number): NetworkServicesMulticastDomainActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkServicesMulticastDomainActivationStateOutputReference <a name="NetworkServicesMulticastDomainActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

new networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesMulticastDomainActivationState;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationState">NetworkServicesMulticastDomainActivationState</a>

---


### NetworkServicesMulticastDomainActivationTimeoutsOutputReference <a name="NetworkServicesMulticastDomainActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

new networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesMulticastDomainActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTimeouts">NetworkServicesMulticastDomainActivationTimeouts</a>

---


### NetworkServicesMulticastDomainActivationTrafficSpecOutputReference <a name="NetworkServicesMulticastDomainActivationTrafficSpecOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastDomainActivation } from '@cdktn/provider-google'

new networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps">resetAggrEgressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps">resetAggrIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize">resetAvgPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps">resetMaxPerGroupIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers">resetMaxPerGroupSubscribers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggrEgressPps` <a name="resetAggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps"></a>

```typescript
public resetAggrEgressPps(): void
```

##### `resetAggrIngressPps` <a name="resetAggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps"></a>

```typescript
public resetAggrIngressPps(): void
```

##### `resetAvgPacketSize` <a name="resetAvgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize"></a>

```typescript
public resetAvgPacketSize(): void
```

##### `resetMaxPerGroupIngressPps` <a name="resetMaxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps"></a>

```typescript
public resetMaxPerGroupIngressPps(): void
```

##### `resetMaxPerGroupSubscribers` <a name="resetMaxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers"></a>

```typescript
public resetMaxPerGroupSubscribers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput">aggrEgressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput">aggrIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput">avgPacketSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput">maxPerGroupIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput">maxPerGroupSubscribersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps">aggrEgressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps">aggrIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize">avgPacketSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps">maxPerGroupIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers">maxPerGroupSubscribers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggrEgressPpsInput`<sup>Optional</sup> <a name="aggrEgressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput"></a>

```typescript
public readonly aggrEgressPpsInput: string;
```

- *Type:* string

---

##### `aggrIngressPpsInput`<sup>Optional</sup> <a name="aggrIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput"></a>

```typescript
public readonly aggrIngressPpsInput: string;
```

- *Type:* string

---

##### `avgPacketSizeInput`<sup>Optional</sup> <a name="avgPacketSizeInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput"></a>

```typescript
public readonly avgPacketSizeInput: number;
```

- *Type:* number

---

##### `maxPerGroupIngressPpsInput`<sup>Optional</sup> <a name="maxPerGroupIngressPpsInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput"></a>

```typescript
public readonly maxPerGroupIngressPpsInput: string;
```

- *Type:* string

---

##### `maxPerGroupSubscribersInput`<sup>Optional</sup> <a name="maxPerGroupSubscribersInput" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput"></a>

```typescript
public readonly maxPerGroupSubscribersInput: string;
```

- *Type:* string

---

##### `aggrEgressPps`<sup>Required</sup> <a name="aggrEgressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps"></a>

```typescript
public readonly aggrEgressPps: string;
```

- *Type:* string

---

##### `aggrIngressPps`<sup>Required</sup> <a name="aggrIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps"></a>

```typescript
public readonly aggrIngressPps: string;
```

- *Type:* string

---

##### `avgPacketSize`<sup>Required</sup> <a name="avgPacketSize" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize"></a>

```typescript
public readonly avgPacketSize: number;
```

- *Type:* number

---

##### `maxPerGroupIngressPps`<sup>Required</sup> <a name="maxPerGroupIngressPps" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps"></a>

```typescript
public readonly maxPerGroupIngressPps: string;
```

- *Type:* string

---

##### `maxPerGroupSubscribers`<sup>Required</sup> <a name="maxPerGroupSubscribers" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers"></a>

```typescript
public readonly maxPerGroupSubscribers: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesMulticastDomainActivationTrafficSpec;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomainActivation.NetworkServicesMulticastDomainActivationTrafficSpec">NetworkServicesMulticastDomainActivationTrafficSpec</a>

---



