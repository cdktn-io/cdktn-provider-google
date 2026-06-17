# `netappStoragePool` Submodule <a name="`netappStoragePool` Submodule" id="@cdktn/provider-google.netappStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappStoragePool <a name="NetappStoragePool" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool google_netapp_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

new netappStoragePool.NetappStoragePool(scope: Construct, id: string, config: NetappStoragePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig">NetappStoragePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig">NetappStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering">resetAllowAutoTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetCustomPerformanceEnabled">resetCustomPerformanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetEnableHotTierAutoResize">resetEnableHotTierAutoResize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetHotTierSizeGib">resetHotTierSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig">resetKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled">resetLdapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetQosType">resetQosType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetReplicaZone">resetReplicaZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetScaleType">resetScaleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalIops">resetTotalIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalThroughputMibps">resetTotalThroughputMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.putTimeouts"></a>

```typescript
public putTimeouts(value: NetappStoragePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAllowAutoTiering` <a name="resetAllowAutoTiering" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering"></a>

```typescript
public resetAllowAutoTiering(): void
```

##### `resetCustomPerformanceEnabled` <a name="resetCustomPerformanceEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetCustomPerformanceEnabled"></a>

```typescript
public resetCustomPerformanceEnabled(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableHotTierAutoResize` <a name="resetEnableHotTierAutoResize" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetEnableHotTierAutoResize"></a>

```typescript
public resetEnableHotTierAutoResize(): void
```

##### `resetHotTierSizeGib` <a name="resetHotTierSizeGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetHotTierSizeGib"></a>

```typescript
public resetHotTierSizeGib(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsConfig` <a name="resetKmsConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig"></a>

```typescript
public resetKmsConfig(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLdapEnabled` <a name="resetLdapEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled"></a>

```typescript
public resetLdapEnabled(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQosType` <a name="resetQosType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetQosType"></a>

```typescript
public resetQosType(): void
```

##### `resetReplicaZone` <a name="resetReplicaZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetReplicaZone"></a>

```typescript
public resetReplicaZone(): void
```

##### `resetScaleType` <a name="resetScaleType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetScaleType"></a>

```typescript
public resetScaleType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTotalIops` <a name="resetTotalIops" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalIops"></a>

```typescript
public resetTotalIops(): void
```

##### `resetTotalThroughputMibps` <a name="resetTotalThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetTotalThroughputMibps"></a>

```typescript
public resetTotalThroughputMibps(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetType"></a>

```typescript
public resetType(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetappStoragePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isConstruct"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

netappStoragePool.NetappStoragePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

netappStoragePool.NetappStoragePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

netappStoragePool.NetappStoragePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

netappStoragePool.NetappStoragePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetappStoragePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetappStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.availableThroughputMibps">availableThroughputMibps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.coldTierSizeUsedGib">coldTierSizeUsedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeUsedGib">hotTierSizeUsedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib">volumeCapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount">volumeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput">allowAutoTieringInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput">capacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabledInput">customPerformanceEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResizeInput">enableHotTierAutoResizeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGibInput">hotTierSizeGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput">kmsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput">ldapEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosTypeInput">qosTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZoneInput">replicaZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleTypeInput">scaleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput">serviceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIopsInput">totalIopsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibpsInput">totalThroughputMibpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory">activeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering">allowAutoTiering</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib">capacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabled">customPerformanceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResize">enableHotTierAutoResize</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGib">hotTierSizeGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig">kmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled">ldapEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosType">qosType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZone">replicaZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleType">scaleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIops">totalIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibps">totalThroughputMibps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `availableThroughputMibps`<sup>Required</sup> <a name="availableThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.availableThroughputMibps"></a>

```typescript
public readonly availableThroughputMibps: number;
```

- *Type:* number

---

##### `coldTierSizeUsedGib`<sup>Required</sup> <a name="coldTierSizeUsedGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.coldTierSizeUsedGib"></a>

```typescript
public readonly coldTierSizeUsedGib: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `hotTierSizeUsedGib`<sup>Required</sup> <a name="hotTierSizeUsedGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeUsedGib"></a>

```typescript
public readonly hotTierSizeUsedGib: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeouts"></a>

```typescript
public readonly timeouts: NetappStoragePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a>

---

##### `volumeCapacityGib`<sup>Required</sup> <a name="volumeCapacityGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib"></a>

```typescript
public readonly volumeCapacityGib: string;
```

- *Type:* string

---

##### `volumeCount`<sup>Required</sup> <a name="volumeCount" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount"></a>

```typescript
public readonly volumeCount: number;
```

- *Type:* number

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: string;
```

- *Type:* string

---

##### `allowAutoTieringInput`<sup>Optional</sup> <a name="allowAutoTieringInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput"></a>

```typescript
public readonly allowAutoTieringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput"></a>

```typescript
public readonly capacityGibInput: string;
```

- *Type:* string

---

##### `customPerformanceEnabledInput`<sup>Optional</sup> <a name="customPerformanceEnabledInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabledInput"></a>

```typescript
public readonly customPerformanceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableHotTierAutoResizeInput`<sup>Optional</sup> <a name="enableHotTierAutoResizeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResizeInput"></a>

```typescript
public readonly enableHotTierAutoResizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hotTierSizeGibInput`<sup>Optional</sup> <a name="hotTierSizeGibInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGibInput"></a>

```typescript
public readonly hotTierSizeGibInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsConfigInput`<sup>Optional</sup> <a name="kmsConfigInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput"></a>

```typescript
public readonly kmsConfigInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ldapEnabledInput`<sup>Optional</sup> <a name="ldapEnabledInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput"></a>

```typescript
public readonly ldapEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `qosTypeInput`<sup>Optional</sup> <a name="qosTypeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosTypeInput"></a>

```typescript
public readonly qosTypeInput: string;
```

- *Type:* string

---

##### `replicaZoneInput`<sup>Optional</sup> <a name="replicaZoneInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZoneInput"></a>

```typescript
public readonly replicaZoneInput: string;
```

- *Type:* string

---

##### `scaleTypeInput`<sup>Optional</sup> <a name="scaleTypeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleTypeInput"></a>

```typescript
public readonly scaleTypeInput: string;
```

- *Type:* string

---

##### `serviceLevelInput`<sup>Optional</sup> <a name="serviceLevelInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput"></a>

```typescript
public readonly serviceLevelInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetappStoragePoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---

##### `totalIopsInput`<sup>Optional</sup> <a name="totalIopsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIopsInput"></a>

```typescript
public readonly totalIopsInput: string;
```

- *Type:* string

---

##### `totalThroughputMibpsInput`<sup>Optional</sup> <a name="totalThroughputMibpsInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibpsInput"></a>

```typescript
public readonly totalThroughputMibpsInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: string;
```

- *Type:* string

---

##### `allowAutoTiering`<sup>Required</sup> <a name="allowAutoTiering" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering"></a>

```typescript
public readonly allowAutoTiering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

---

##### `customPerformanceEnabled`<sup>Required</sup> <a name="customPerformanceEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabled"></a>

```typescript
public readonly customPerformanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableHotTierAutoResize`<sup>Required</sup> <a name="enableHotTierAutoResize" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.enableHotTierAutoResize"></a>

```typescript
public readonly enableHotTierAutoResize: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hotTierSizeGib`<sup>Required</sup> <a name="hotTierSizeGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.hotTierSizeGib"></a>

```typescript
public readonly hotTierSizeGib: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsConfig`<sup>Required</sup> <a name="kmsConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig"></a>

```typescript
public readonly kmsConfig: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ldapEnabled`<sup>Required</sup> <a name="ldapEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled"></a>

```typescript
public readonly ldapEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `qosType`<sup>Required</sup> <a name="qosType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.qosType"></a>

```typescript
public readonly qosType: string;
```

- *Type:* string

---

##### `replicaZone`<sup>Required</sup> <a name="replicaZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.replicaZone"></a>

```typescript
public readonly replicaZone: string;
```

- *Type:* string

---

##### `scaleType`<sup>Required</sup> <a name="scaleType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.scaleType"></a>

```typescript
public readonly scaleType: string;
```

- *Type:* string

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

---

##### `totalIops`<sup>Required</sup> <a name="totalIops" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalIops"></a>

```typescript
public readonly totalIops: string;
```

- *Type:* string

---

##### `totalThroughputMibps`<sup>Required</sup> <a name="totalThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibps"></a>

```typescript
public readonly totalThroughputMibps: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappStoragePoolConfig <a name="NetappStoragePoolConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.Initializer"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

const netappStoragePoolConfig: netappStoragePool.NetappStoragePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib">capacityGib</a></code> | <code>string</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location">location</a></code> | <code>string</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name">name</a></code> | <code>string</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network">network</a></code> | <code>string</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory">activeDirectory</a></code> | <code>string</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering">allowAutoTiering</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.customPerformanceEnabled">customPerformanceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. True if using Independent Scaling of capacity and performance (Hyperdisk). Default is false. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.enableHotTierAutoResize">enableHotTierAutoResize</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.hotTierSizeGib">hotTierSizeGib</a></code> | <code>string</code> | Total hot tier capacity for the Storage Pool. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig">kmsConfig</a></code> | <code>string</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled">ldapEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.mode">mode</a></code> | <code>string</code> | Mode of the storage pool. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.qosType">qosType</a></code> | <code>string</code> | QoS (Quality of Service) type of the storage pool. Possible values are: AUTO, MANUAL. Possible values: ["QOS_TYPE_UNSPECIFIED", "AUTO", "MANUAL"]. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.replicaZone">replicaZone</a></code> | <code>string</code> | Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones). |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.scaleType">scaleType</a></code> | <code>string</code> | The scale type of the storage pool. Defaults to 'SCALE_TYPE_DEFAULT' if not specified. Possible values: ["SCALE_TYPE_UNSPECIFIED", "SCALE_TYPE_DEFAULT", "SCALE_TYPE_SCALEOUT"]. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalIops">totalIops</a></code> | <code>string</code> | Optional. Custom Performance Total IOPS of the pool If not provided, it will be calculated based on the totalThroughputMibps. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalThroughputMibps">totalThroughputMibps</a></code> | <code>string</code> | Optional. Custom Performance Total Throughput of the pool (in MiB/s). |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.type">type</a></code> | <code>string</code> | Type of the storage pool. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.zone">zone</a></code> | <code>string</code> | Specifies the active zone for regional Flex pools. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: string;
```

- *Type:* string

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}

---

##### `allowAutoTiering`<sup>Optional</sup> <a name="allowAutoTiering" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering"></a>

```typescript
public readonly allowAutoTiering: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

True if the storage pool supports Auto Tiering enabled volumes. Default is false.
Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#allow_auto_tiering NetappStoragePool#allow_auto_tiering}

---

##### `customPerformanceEnabled`<sup>Optional</sup> <a name="customPerformanceEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.customPerformanceEnabled"></a>

```typescript
public readonly customPerformanceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. True if using Independent Scaling of capacity and performance (Hyperdisk). Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#custom_performance_enabled NetappStoragePool#custom_performance_enabled}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#deletion_policy NetappStoragePool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}

---

##### `enableHotTierAutoResize`<sup>Optional</sup> <a name="enableHotTierAutoResize" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.enableHotTierAutoResize"></a>

```typescript
public readonly enableHotTierAutoResize: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%.

Default is true.
The increment will kick in only if the new size after increment is still less than or equal to storage pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#enable_hot_tier_auto_resize NetappStoragePool#enable_hot_tier_auto_resize}

---

##### `hotTierSizeGib`<sup>Optional</sup> <a name="hotTierSizeGib" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.hotTierSizeGib"></a>

```typescript
public readonly hotTierSizeGib: string;
```

- *Type:* string

Total hot tier capacity for the Storage Pool.

It is applicable only to Flex service level.
It should be less than the minimum storage pool size and cannot be more than the current storage pool size. It cannot be decreased once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#hot_tier_size_gib NetappStoragePool#hot_tier_size_gib}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsConfig`<sup>Optional</sup> <a name="kmsConfig" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig"></a>

```typescript
public readonly kmsConfig: string;
```

- *Type:* string

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}

---

##### `ldapEnabled`<sup>Optional</sup> <a name="ldapEnabled" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled"></a>

```typescript
public readonly ldapEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Mode of the storage pool.

The operational mode of the storage pool. ONTAP mode enables operations
via ONTAP Mode APIs, while DEFAULT mode enables operations via NetApp Volumes APIs.
If not specified during creation, the mode defaults to DEFAULT. Possible values: ["MODE_UNSPECIFIED", "DEFAULT", "ONTAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#mode NetappStoragePool#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}.

---

##### `qosType`<sup>Optional</sup> <a name="qosType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.qosType"></a>

```typescript
public readonly qosType: string;
```

- *Type:* string

QoS (Quality of Service) type of the storage pool. Possible values are: AUTO, MANUAL. Possible values: ["QOS_TYPE_UNSPECIFIED", "AUTO", "MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#qos_type NetappStoragePool#qos_type}

---

##### `replicaZone`<sup>Optional</sup> <a name="replicaZone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.replicaZone"></a>

```typescript
public readonly replicaZone: string;
```

- *Type:* string

Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#replica_zone NetappStoragePool#replica_zone}

---

##### `scaleType`<sup>Optional</sup> <a name="scaleType" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.scaleType"></a>

```typescript
public readonly scaleType: string;
```

- *Type:* string

The scale type of the storage pool. Defaults to 'SCALE_TYPE_DEFAULT' if not specified. Possible values: ["SCALE_TYPE_UNSPECIFIED", "SCALE_TYPE_DEFAULT", "SCALE_TYPE_SCALEOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#scale_type NetappStoragePool#scale_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetappStoragePoolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}

---

##### `totalIops`<sup>Optional</sup> <a name="totalIops" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalIops"></a>

```typescript
public readonly totalIops: string;
```

- *Type:* string

Optional. Custom Performance Total IOPS of the pool If not provided, it will be calculated based on the totalThroughputMibps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#total_iops NetappStoragePool#total_iops}

---

##### `totalThroughputMibps`<sup>Optional</sup> <a name="totalThroughputMibps" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalThroughputMibps"></a>

```typescript
public readonly totalThroughputMibps: string;
```

- *Type:* string

Optional. Custom Performance Total Throughput of the pool (in MiB/s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#total_throughput_mibps NetappStoragePool#total_throughput_mibps}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the storage pool.

This field is used to control whether the pool supports FILE based volumes only or UNIFIED (both FILE and BLOCK) volumes.
If not specified during creation, it defaults to FILE. Possible values: ["STORAGE_POOL_TYPE_UNSPECIFIED", "FILE", "UNIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#type NetappStoragePool#type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Specifies the active zone for regional Flex pools.

'zone' and 'replica_zone' values can be swapped to initiate a
[zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).
If you want to create a zonal Flex pool, specify a zone name for 'location' and omit 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#zone NetappStoragePool#zone}

---

### NetappStoragePoolTimeouts <a name="NetappStoragePoolTimeouts" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.Initializer"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

const netappStoragePoolTimeouts: netappStoragePool.NetappStoragePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappStoragePoolTimeoutsOutputReference <a name="NetappStoragePoolTimeoutsOutputReference" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { netappStoragePool } from '@cdktn/provider-google'

new netappStoragePool.NetappStoragePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappStoragePoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---



