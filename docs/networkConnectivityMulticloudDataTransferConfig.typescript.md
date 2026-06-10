# `networkConnectivityMulticloudDataTransferConfig` Submodule <a name="`networkConnectivityMulticloudDataTransferConfig` Submodule" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityMulticloudDataTransferConfig <a name="NetworkConnectivityMulticloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config google_network_connectivity_multicloud_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

new networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig(scope: Construct, id: string, config: NetworkConnectivityMulticloudDataTransferConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig">NetworkConnectivityMulticloudDataTransferConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig">NetworkConnectivityMulticloudDataTransferConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices">putServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServices` <a name="putServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices"></a>

```typescript
public putServices(value: IResolvable | NetworkConnectivityMulticloudDataTransferConfigServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivityMulticloudDataTransferConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServices` <a name="resetServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices"></a>

```typescript
public resetServices(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityMulticloudDataTransferConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityMulticloudDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityMulticloudDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount">destinationsActiveCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount">destinationsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services">services</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput">servicesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinationsActiveCount`<sup>Required</sup> <a name="destinationsActiveCount" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount"></a>

```typescript
public readonly destinationsActiveCount: number;
```

- *Type:* number

---

##### `destinationsCount`<sup>Required</sup> <a name="destinationsCount" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount"></a>

```typescript
public readonly destinationsCount: number;
```

- *Type:* number

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services"></a>

```typescript
public readonly services: NetworkConnectivityMulticloudDataTransferConfigServicesList;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput"></a>

```typescript
public readonly servicesInput: IResolvable | NetworkConnectivityMulticloudDataTransferConfigServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivityMulticloudDataTransferConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityMulticloudDataTransferConfigConfig <a name="NetworkConnectivityMulticloudDataTransferConfigConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

const networkConnectivityMulticloudDataTransferConfigConfig: networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name">name</a></code> | <code>string</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description">description</a></code> | <code>string</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services">services</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]</code> | services block. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#location NetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#name NetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#deletion_policy NetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#description NetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#labels NetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services"></a>

```typescript
public readonly services: IResolvable | NetworkConnectivityMulticloudDataTransferConfigServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#services NetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityMulticloudDataTransferConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#timeouts NetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

### NetworkConnectivityMulticloudDataTransferConfigServices <a name="NetworkConnectivityMulticloudDataTransferConfigServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

const networkConnectivityMulticloudDataTransferConfigServices: networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#service_name NetworkConnectivityMulticloudDataTransferConfig#service_name}

---

### NetworkConnectivityMulticloudDataTransferConfigServicesStates <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStates" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

const networkConnectivityMulticloudDataTransferConfigServicesStates: networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates = { ... }
```


### NetworkConnectivityMulticloudDataTransferConfigTimeouts <a name="NetworkConnectivityMulticloudDataTransferConfigTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

const networkConnectivityMulticloudDataTransferConfigTimeouts: networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityMulticloudDataTransferConfigServicesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

new networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get"></a>

```typescript
public get(index: number): NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityMulticloudDataTransferConfigServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>[]

---


### NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

new networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states">states</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states"></a>

```typescript
public readonly states: NetworkConnectivityMulticloudDataTransferConfigServicesStatesList;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityMulticloudDataTransferConfigServices;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

new networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get"></a>

```typescript
public get(index: number): NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

new networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityMulticloudDataTransferConfigServicesStates;
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a>

---


### NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityMulticloudDataTransferConfig } from '@cdktn/provider-google'

new networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityMulticloudDataTransferConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---



