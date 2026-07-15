# `networkServicesMulticastGroupConsumerActivation` Submodule <a name="`networkServicesMulticastGroupConsumerActivation` Submodule" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastGroupConsumerActivation <a name="NetworkServicesMulticastGroupConsumerActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation google_network_services_multicast_group_consumer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

new networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation(scope: Construct, id: string, config: NetworkServicesMulticastGroupConsumerActivationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig">NetworkServicesMulticastGroupConsumerActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig">NetworkServicesMulticastGroupConsumerActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig"></a>

```typescript
public putLogConfig(value: NetworkServicesMulticastGroupConsumerActivationLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesMulticastGroupConsumerActivationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkServicesMulticastGroupConsumerActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesMulticastGroupConsumerActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesMulticastGroupConsumerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastGroupConsumerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput">multicastConsumerAssociationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput">multicastGroupConsumerActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput">multicastGroupRangeActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation">multicastConsumerAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId">multicastGroupConsumerActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfig"></a>

```typescript
public readonly logConfig: NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference">NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.state"></a>

```typescript
public readonly state: NetworkServicesMulticastGroupConsumerActivationStateList;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList">NetworkServicesMulticastGroupConsumerActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference">NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: NetworkServicesMulticastGroupConsumerActivationLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---

##### `multicastConsumerAssociationInput`<sup>Optional</sup> <a name="multicastConsumerAssociationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociationInput"></a>

```typescript
public readonly multicastConsumerAssociationInput: string;
```

- *Type:* string

---

##### `multicastGroupConsumerActivationIdInput`<sup>Optional</sup> <a name="multicastGroupConsumerActivationIdInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationIdInput"></a>

```typescript
public readonly multicastGroupConsumerActivationIdInput: string;
```

- *Type:* string

---

##### `multicastGroupRangeActivationInput`<sup>Optional</sup> <a name="multicastGroupRangeActivationInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivationInput"></a>

```typescript
public readonly multicastGroupRangeActivationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesMulticastGroupConsumerActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastConsumerAssociation`<sup>Required</sup> <a name="multicastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastConsumerAssociation"></a>

```typescript
public readonly multicastConsumerAssociation: string;
```

- *Type:* string

---

##### `multicastGroupConsumerActivationId`<sup>Required</sup> <a name="multicastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupConsumerActivationId"></a>

```typescript
public readonly multicastGroupConsumerActivationId: string;
```

- *Type:* string

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.multicastGroupRangeActivation"></a>

```typescript
public readonly multicastGroupRangeActivation: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastGroupConsumerActivationConfig <a name="NetworkServicesMulticastGroupConsumerActivationConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

const networkServicesMulticastGroupConsumerActivationConfig: networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation">multicastConsumerAssociation</a></code> | <code>string</code> | The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId">multicastGroupConsumerActivationId</a></code> | <code>string</code> | A unique name for the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>string</code> | The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast group consumer activation. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#location NetworkServicesMulticastGroupConsumerActivation#location}

---

##### `multicastConsumerAssociation`<sup>Required</sup> <a name="multicastConsumerAssociation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastConsumerAssociation"></a>

```typescript
public readonly multicastConsumerAssociation: string;
```

- *Type:* string

The resource name of the multicast consumer association that is in the same zone as this multicast group consumer activation.

Use the following format:
'projects/* /locations/* /multicastConsumerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_consumer_association NetworkServicesMulticastGroupConsumerActivation#multicast_consumer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupConsumerActivationId`<sup>Required</sup> <a name="multicastGroupConsumerActivationId" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupConsumerActivationId"></a>

```typescript
public readonly multicastGroupConsumerActivationId: string;
```

- *Type:* string

A unique name for the multicast group consumer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_consumer_activation_id NetworkServicesMulticastGroupConsumerActivation#multicast_group_consumer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.multicastGroupRangeActivation"></a>

```typescript
public readonly multicastGroupRangeActivation: string;
```

- *Type:* string

The resource name of the multicast group range activation created by the admin in the same zone as this multicast group consumer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#multicast_group_range_activation NetworkServicesMulticastGroupConsumerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#deletion_policy NetworkServicesMulticastGroupConsumerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast group consumer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#description NetworkServicesMulticastGroupConsumerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#id NetworkServicesMulticastGroupConsumerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#labels NetworkServicesMulticastGroupConsumerActivation#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.logConfig"></a>

```typescript
public readonly logConfig: NetworkServicesMulticastGroupConsumerActivationLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#log_config NetworkServicesMulticastGroupConsumerActivation#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#project NetworkServicesMulticastGroupConsumerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesMulticastGroupConsumerActivationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#timeouts NetworkServicesMulticastGroupConsumerActivation#timeouts}

---

### NetworkServicesMulticastGroupConsumerActivationLogConfig <a name="NetworkServicesMulticastGroupConsumerActivationLogConfig" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

const networkServicesMulticastGroupConsumerActivationLogConfig: networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#enabled NetworkServicesMulticastGroupConsumerActivation#enabled}

---

### NetworkServicesMulticastGroupConsumerActivationState <a name="NetworkServicesMulticastGroupConsumerActivationState" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

const networkServicesMulticastGroupConsumerActivationState: networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState = { ... }
```


### NetworkServicesMulticastGroupConsumerActivationTimeouts <a name="NetworkServicesMulticastGroupConsumerActivationTimeouts" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

const networkServicesMulticastGroupConsumerActivationTimeouts: networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#create NetworkServicesMulticastGroupConsumerActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#delete NetworkServicesMulticastGroupConsumerActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/network_services_multicast_group_consumer_activation#update NetworkServicesMulticastGroupConsumerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

new networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesMulticastGroupConsumerActivationLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationLogConfig">NetworkServicesMulticastGroupConsumerActivationLogConfig</a>

---


### NetworkServicesMulticastGroupConsumerActivationStateList <a name="NetworkServicesMulticastGroupConsumerActivationStateList" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

new networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get"></a>

```typescript
public get(index: number): NetworkServicesMulticastGroupConsumerActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkServicesMulticastGroupConsumerActivationStateOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

new networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkServicesMulticastGroupConsumerActivationState;
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationState">NetworkServicesMulticastGroupConsumerActivationState</a>

---


### NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference <a name="NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesMulticastGroupConsumerActivation } from '@cdktn/provider-google'

new networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesMulticastGroupConsumerActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastGroupConsumerActivation.NetworkServicesMulticastGroupConsumerActivationTimeouts">NetworkServicesMulticastGroupConsumerActivationTimeouts</a>

---



