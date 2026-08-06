# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktn/provider-google.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktn/provider-google.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolume.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolume(scope: Construct, id: string, config: NetappVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.netappVolume.NetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putBackupConfig">putBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putBlockDevices">putBlockDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putCacheParameters">putCacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putExportPolicy">putExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters">putHybridReplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putLargeCapacityConfig">putLargeCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putRestoreParameters">putRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putSnapshotPolicy">putSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putTieringPolicy">putTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetBackupConfig">resetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetBlockDevices">resetBlockDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetCacheParameters">resetCacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetExportPolicy">resetExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetHybridReplicationParameters">resetHybridReplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetKerberosEnabled">resetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetLargeCapacity">resetLargeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetLargeCapacityConfig">resetLargeCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetMultipleEndpoints">resetMultipleEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetRestoreParameters">resetRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetRestrictedActions">resetRestrictedActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetSmbSettings">resetSmbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory">resetSnapshotDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy">resetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetThroughputMibps">resetThroughputMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetTieringPolicy">resetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.resetUnixPermissions">resetUnixPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.netappVolume.NetappVolume.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.netappVolume.NetappVolume.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.netappVolume.NetappVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.netappVolume.NetappVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.netappVolume.NetappVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.netappVolume.NetappVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.netappVolume.NetappVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.netappVolume.NetappVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.netappVolume.NetappVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.netappVolume.NetappVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.netappVolume.NetappVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.netappVolume.NetappVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.netappVolume.NetappVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupConfig` <a name="putBackupConfig" id="@cdktn/provider-google.netappVolume.NetappVolume.putBackupConfig"></a>

```typescript
public putBackupConfig(value: NetappVolumeBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---

##### `putBlockDevices` <a name="putBlockDevices" id="@cdktn/provider-google.netappVolume.NetappVolume.putBlockDevices"></a>

```typescript
public putBlockDevices(value: IResolvable | NetappVolumeBlockDevices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putBlockDevices.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>[]

---

##### `putCacheParameters` <a name="putCacheParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.putCacheParameters"></a>

```typescript
public putCacheParameters(value: NetappVolumeCacheParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putCacheParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters">NetappVolumeCacheParameters</a>

---

##### `putExportPolicy` <a name="putExportPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.putExportPolicy"></a>

```typescript
public putExportPolicy(value: NetappVolumeExportPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `putHybridReplicationParameters` <a name="putHybridReplicationParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters"></a>

```typescript
public putHybridReplicationParameters(value: NetappVolumeHybridReplicationParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putHybridReplicationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

---

##### `putLargeCapacityConfig` <a name="putLargeCapacityConfig" id="@cdktn/provider-google.netappVolume.NetappVolume.putLargeCapacityConfig"></a>

```typescript
public putLargeCapacityConfig(value: NetappVolumeLargeCapacityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putLargeCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig">NetappVolumeLargeCapacityConfig</a>

---

##### `putRestoreParameters` <a name="putRestoreParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.putRestoreParameters"></a>

```typescript
public putRestoreParameters(value: NetappVolumeRestoreParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putRestoreParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `putSnapshotPolicy` <a name="putSnapshotPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.putSnapshotPolicy"></a>

```typescript
public putSnapshotPolicy(value: NetappVolumeSnapshotPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `putTieringPolicy` <a name="putTieringPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.putTieringPolicy"></a>

```typescript
public putTieringPolicy(value: NetappVolumeTieringPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.netappVolume.NetappVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: NetappVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `resetBackupConfig` <a name="resetBackupConfig" id="@cdktn/provider-google.netappVolume.NetappVolume.resetBackupConfig"></a>

```typescript
public resetBackupConfig(): void
```

##### `resetBlockDevices` <a name="resetBlockDevices" id="@cdktn/provider-google.netappVolume.NetappVolume.resetBlockDevices"></a>

```typescript
public resetBlockDevices(): void
```

##### `resetCacheParameters` <a name="resetCacheParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.resetCacheParameters"></a>

```typescript
public resetCacheParameters(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.netappVolume.NetappVolume.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExportPolicy` <a name="resetExportPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.resetExportPolicy"></a>

```typescript
public resetExportPolicy(): void
```

##### `resetHybridReplicationParameters` <a name="resetHybridReplicationParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.resetHybridReplicationParameters"></a>

```typescript
public resetHybridReplicationParameters(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.netappVolume.NetappVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKerberosEnabled` <a name="resetKerberosEnabled" id="@cdktn/provider-google.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```typescript
public resetKerberosEnabled(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.netappVolume.NetappVolume.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLargeCapacity` <a name="resetLargeCapacity" id="@cdktn/provider-google.netappVolume.NetappVolume.resetLargeCapacity"></a>

```typescript
public resetLargeCapacity(): void
```

##### `resetLargeCapacityConfig` <a name="resetLargeCapacityConfig" id="@cdktn/provider-google.netappVolume.NetappVolume.resetLargeCapacityConfig"></a>

```typescript
public resetLargeCapacityConfig(): void
```

##### `resetMultipleEndpoints` <a name="resetMultipleEndpoints" id="@cdktn/provider-google.netappVolume.NetappVolume.resetMultipleEndpoints"></a>

```typescript
public resetMultipleEndpoints(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.netappVolume.NetappVolume.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRestoreParameters` <a name="resetRestoreParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.resetRestoreParameters"></a>

```typescript
public resetRestoreParameters(): void
```

##### `resetRestrictedActions` <a name="resetRestrictedActions" id="@cdktn/provider-google.netappVolume.NetappVolume.resetRestrictedActions"></a>

```typescript
public resetRestrictedActions(): void
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktn/provider-google.netappVolume.NetappVolume.resetSecurityStyle"></a>

```typescript
public resetSecurityStyle(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktn/provider-google.netappVolume.NetappVolume.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetSmbSettings` <a name="resetSmbSettings" id="@cdktn/provider-google.netappVolume.NetappVolume.resetSmbSettings"></a>

```typescript
public resetSmbSettings(): void
```

##### `resetSnapshotDirectory` <a name="resetSnapshotDirectory" id="@cdktn/provider-google.netappVolume.NetappVolume.resetSnapshotDirectory"></a>

```typescript
public resetSnapshotDirectory(): void
```

##### `resetSnapshotPolicy` <a name="resetSnapshotPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.resetSnapshotPolicy"></a>

```typescript
public resetSnapshotPolicy(): void
```

##### `resetThroughputMibps` <a name="resetThroughputMibps" id="@cdktn/provider-google.netappVolume.NetappVolume.resetThroughputMibps"></a>

```typescript
public resetThroughputMibps(): void
```

##### `resetTieringPolicy` <a name="resetTieringPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.resetTieringPolicy"></a>

```typescript
public resetTieringPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.netappVolume.NetappVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnixPermissions` <a name="resetUnixPermissions" id="@cdktn/provider-google.netappVolume.NetappVolume.resetUnixPermissions"></a>

```typescript
public resetUnixPermissions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.netappVolume.NetappVolume.isConstruct"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

netappVolume.NetappVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.netappVolume.NetappVolume.isTerraformElement"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

netappVolume.NetappVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.netappVolume.NetappVolume.isTerraformResource"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

netappVolume.NetappVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.netappVolume.NetappVolume.generateConfigForImport"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

netappVolume.NetappVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.activeDirectory">activeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.blockDevices">blockDevices</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList">NetappVolumeBlockDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.cacheParameters">cacheParameters</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference">NetappVolumeCacheParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.coldTierSizeGib">coldTierSizeGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.exportPolicy">exportPolicy</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.hasReplication">hasReplication</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.hotTierSizeUsedGib">hotTierSizeUsedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.hybridReplicationParameters">hybridReplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference">NetappVolumeHybridReplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.kmsConfig">kmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacityConfig">largeCapacityConfig</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference">NetappVolumeLargeCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.ldapEnabled">ldapEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.psaRange">psaRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.replicaZone">replicaZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.restoreParameters">restoreParameters</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotPolicy">snapshotPolicy</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference">NetappVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.usedGib">usedGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.backupConfigInput">backupConfigInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.blockDevicesInput">blockDevicesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.cacheParametersInput">cacheParametersInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters">NetappVolumeCacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.capacityGibInput">capacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.exportPolicyInput">exportPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.hybridReplicationParametersInput">hybridReplicationParametersInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput">kerberosEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacityConfigInput">largeCapacityConfigInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig">NetappVolumeLargeCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacityInput">largeCapacityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.multipleEndpointsInput">multipleEndpointsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.restoreParametersInput">restoreParametersInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput">restrictedActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.smbSettingsInput">smbSettingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput">snapshotDirectoryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput">snapshotPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.storagePoolInput">storagePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.throughputMibpsInput">throughputMibpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput">unixPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.capacityGib">capacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.kerberosEnabled">kerberosEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacity">largeCapacity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.multipleEndpoints">multipleEndpoints</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.restrictedActions">restrictedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.securityStyle">securityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.smbSettings">smbSettings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotDirectory">snapshotDirectory</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.storagePool">storagePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.throughputMibps">throughputMibps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.unixPermissions">unixPermissions</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.netappVolume.NetappVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.netappVolume.NetappVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.netappVolume.NetappVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappVolume.NetappVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappVolume.NetappVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.netappVolume.NetappVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.netappVolume.NetappVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappVolume.NetappVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappVolume.NetappVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappVolume.NetappVolume.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktn/provider-google.netappVolume.NetappVolume.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: string;
```

- *Type:* string

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="@cdktn/provider-google.netappVolume.NetappVolume.property.backupConfig"></a>

```typescript
public readonly backupConfig: NetappVolumeBackupConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference">NetappVolumeBackupConfigOutputReference</a>

---

##### `blockDevices`<sup>Required</sup> <a name="blockDevices" id="@cdktn/provider-google.netappVolume.NetappVolume.property.blockDevices"></a>

```typescript
public readonly blockDevices: NetappVolumeBlockDevicesList;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList">NetappVolumeBlockDevicesList</a>

---

##### `cacheParameters`<sup>Required</sup> <a name="cacheParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.property.cacheParameters"></a>

```typescript
public readonly cacheParameters: NetappVolumeCacheParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference">NetappVolumeCacheParametersOutputReference</a>

---

##### `coldTierSizeGib`<sup>Required</sup> <a name="coldTierSizeGib" id="@cdktn/provider-google.netappVolume.NetappVolume.property.coldTierSizeGib"></a>

```typescript
public readonly coldTierSizeGib: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.netappVolume.NetappVolume.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.netappVolume.NetappVolume.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-google.netappVolume.NetappVolume.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `exportPolicy`<sup>Required</sup> <a name="exportPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.property.exportPolicy"></a>

```typescript
public readonly exportPolicy: NetappVolumeExportPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference">NetappVolumeExportPolicyOutputReference</a>

---

##### `hasReplication`<sup>Required</sup> <a name="hasReplication" id="@cdktn/provider-google.netappVolume.NetappVolume.property.hasReplication"></a>

```typescript
public readonly hasReplication: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `hotTierSizeUsedGib`<sup>Required</sup> <a name="hotTierSizeUsedGib" id="@cdktn/provider-google.netappVolume.NetappVolume.property.hotTierSizeUsedGib"></a>

```typescript
public readonly hotTierSizeUsedGib: string;
```

- *Type:* string

---

##### `hybridReplicationParameters`<sup>Required</sup> <a name="hybridReplicationParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.property.hybridReplicationParameters"></a>

```typescript
public readonly hybridReplicationParameters: NetappVolumeHybridReplicationParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference">NetappVolumeHybridReplicationParametersOutputReference</a>

---

##### `kmsConfig`<sup>Required</sup> <a name="kmsConfig" id="@cdktn/provider-google.netappVolume.NetappVolume.property.kmsConfig"></a>

```typescript
public readonly kmsConfig: string;
```

- *Type:* string

---

##### `largeCapacityConfig`<sup>Required</sup> <a name="largeCapacityConfig" id="@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacityConfig"></a>

```typescript
public readonly largeCapacityConfig: NetappVolumeLargeCapacityConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference">NetappVolumeLargeCapacityConfigOutputReference</a>

---

##### `ldapEnabled`<sup>Required</sup> <a name="ldapEnabled" id="@cdktn/provider-google.netappVolume.NetappVolume.property.ldapEnabled"></a>

```typescript
public readonly ldapEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-google.netappVolume.NetappVolume.property.mountOptions"></a>

```typescript
public readonly mountOptions: NetappVolumeMountOptionsList;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList">NetappVolumeMountOptionsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.netappVolume.NetappVolume.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `psaRange`<sup>Required</sup> <a name="psaRange" id="@cdktn/provider-google.netappVolume.NetappVolume.property.psaRange"></a>

```typescript
public readonly psaRange: string;
```

- *Type:* string

---

##### `replicaZone`<sup>Required</sup> <a name="replicaZone" id="@cdktn/provider-google.netappVolume.NetappVolume.property.replicaZone"></a>

```typescript
public readonly replicaZone: string;
```

- *Type:* string

---

##### `restoreParameters`<sup>Required</sup> <a name="restoreParameters" id="@cdktn/provider-google.netappVolume.NetappVolume.property.restoreParameters"></a>

```typescript
public readonly restoreParameters: NetappVolumeRestoreParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference">NetappVolumeRestoreParametersOutputReference</a>

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktn/provider-google.netappVolume.NetappVolume.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

---

##### `snapshotPolicy`<sup>Required</sup> <a name="snapshotPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotPolicy"></a>

```typescript
public readonly snapshotPolicy: NetappVolumeSnapshotPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference">NetappVolumeSnapshotPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.netappVolume.NetappVolume.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google.netappVolume.NetappVolume.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.netappVolume.NetappVolume.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: NetappVolumeTieringPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference">NetappVolumeTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.netappVolume.NetappVolume.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `usedGib`<sup>Required</sup> <a name="usedGib" id="@cdktn/provider-google.netappVolume.NetappVolume.property.usedGib"></a>

```typescript
public readonly usedGib: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.netappVolume.NetappVolume.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `backupConfigInput`<sup>Optional</sup> <a name="backupConfigInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.backupConfigInput"></a>

```typescript
public readonly backupConfigInput: NetappVolumeBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---

##### `blockDevicesInput`<sup>Optional</sup> <a name="blockDevicesInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.blockDevicesInput"></a>

```typescript
public readonly blockDevicesInput: IResolvable | NetappVolumeBlockDevices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>[]

---

##### `cacheParametersInput`<sup>Optional</sup> <a name="cacheParametersInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.cacheParametersInput"></a>

```typescript
public readonly cacheParametersInput: NetappVolumeCacheParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters">NetappVolumeCacheParameters</a>

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.capacityGibInput"></a>

```typescript
public readonly capacityGibInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exportPolicyInput`<sup>Optional</sup> <a name="exportPolicyInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.exportPolicyInput"></a>

```typescript
public readonly exportPolicyInput: NetappVolumeExportPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---

##### `hybridReplicationParametersInput`<sup>Optional</sup> <a name="hybridReplicationParametersInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.hybridReplicationParametersInput"></a>

```typescript
public readonly hybridReplicationParametersInput: NetappVolumeHybridReplicationParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kerberosEnabledInput`<sup>Optional</sup> <a name="kerberosEnabledInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```typescript
public readonly kerberosEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `largeCapacityConfigInput`<sup>Optional</sup> <a name="largeCapacityConfigInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacityConfigInput"></a>

```typescript
public readonly largeCapacityConfigInput: NetappVolumeLargeCapacityConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig">NetappVolumeLargeCapacityConfig</a>

---

##### `largeCapacityInput`<sup>Optional</sup> <a name="largeCapacityInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacityInput"></a>

```typescript
public readonly largeCapacityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multipleEndpointsInput`<sup>Optional</sup> <a name="multipleEndpointsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.multipleEndpointsInput"></a>

```typescript
public readonly multipleEndpointsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `restoreParametersInput`<sup>Optional</sup> <a name="restoreParametersInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.restoreParametersInput"></a>

```typescript
public readonly restoreParametersInput: NetappVolumeRestoreParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---

##### `restrictedActionsInput`<sup>Optional</sup> <a name="restrictedActionsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.restrictedActionsInput"></a>

```typescript
public readonly restrictedActionsInput: string[];
```

- *Type:* string[]

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.securityStyleInput"></a>

```typescript
public readonly securityStyleInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `smbSettingsInput`<sup>Optional</sup> <a name="smbSettingsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.smbSettingsInput"></a>

```typescript
public readonly smbSettingsInput: string[];
```

- *Type:* string[]

---

##### `snapshotDirectoryInput`<sup>Optional</sup> <a name="snapshotDirectoryInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotDirectoryInput"></a>

```typescript
public readonly snapshotDirectoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotPolicyInput`<sup>Optional</sup> <a name="snapshotPolicyInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotPolicyInput"></a>

```typescript
public readonly snapshotPolicyInput: NetappVolumeSnapshotPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.storagePoolInput"></a>

```typescript
public readonly storagePoolInput: string;
```

- *Type:* string

---

##### `throughputMibpsInput`<sup>Optional</sup> <a name="throughputMibpsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.throughputMibpsInput"></a>

```typescript
public readonly throughputMibpsInput: number;
```

- *Type:* number

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.tieringPolicyInput"></a>

```typescript
public readonly tieringPolicyInput: NetappVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetappVolumeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `unixPermissionsInput`<sup>Optional</sup> <a name="unixPermissionsInput" id="@cdktn/provider-google.netappVolume.NetappVolume.property.unixPermissionsInput"></a>

```typescript
public readonly unixPermissionsInput: string;
```

- *Type:* string

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktn/provider-google.netappVolume.NetappVolume.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.netappVolume.NetappVolume.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.netappVolume.NetappVolume.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappVolume.NetappVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kerberosEnabled`<sup>Required</sup> <a name="kerberosEnabled" id="@cdktn/provider-google.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```typescript
public readonly kerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.netappVolume.NetappVolume.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `largeCapacity`<sup>Required</sup> <a name="largeCapacity" id="@cdktn/provider-google.netappVolume.NetappVolume.property.largeCapacity"></a>

```typescript
public readonly largeCapacity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappVolume.NetappVolume.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multipleEndpoints`<sup>Required</sup> <a name="multipleEndpoints" id="@cdktn/provider-google.netappVolume.NetappVolume.property.multipleEndpoints"></a>

```typescript
public readonly multipleEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappVolume.NetappVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.netappVolume.NetappVolume.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google.netappVolume.NetappVolume.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `restrictedActions`<sup>Required</sup> <a name="restrictedActions" id="@cdktn/provider-google.netappVolume.NetappVolume.property.restrictedActions"></a>

```typescript
public readonly restrictedActions: string[];
```

- *Type:* string[]

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktn/provider-google.netappVolume.NetappVolume.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktn/provider-google.netappVolume.NetappVolume.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `smbSettings`<sup>Required</sup> <a name="smbSettings" id="@cdktn/provider-google.netappVolume.NetappVolume.property.smbSettings"></a>

```typescript
public readonly smbSettings: string[];
```

- *Type:* string[]

---

##### `snapshotDirectory`<sup>Required</sup> <a name="snapshotDirectory" id="@cdktn/provider-google.netappVolume.NetappVolume.property.snapshotDirectory"></a>

```typescript
public readonly snapshotDirectory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktn/provider-google.netappVolume.NetappVolume.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

---

##### `throughputMibps`<sup>Required</sup> <a name="throughputMibps" id="@cdktn/provider-google.netappVolume.NetappVolume.property.throughputMibps"></a>

```typescript
public readonly throughputMibps: number;
```

- *Type:* number

---

##### `unixPermissions`<sup>Required</sup> <a name="unixPermissions" id="@cdktn/provider-google.netappVolume.NetappVolume.property.unixPermissions"></a>

```typescript
public readonly unixPermissions: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.netappVolume.NetappVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBackupConfig <a name="NetappVolumeBackupConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeBackupConfig: netappVolume.NetappVolumeBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies">backupPolicies</a></code> | <code>string[]</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault">backupVault</a></code> | <code>string</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled">scheduledBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `backupPolicies`<sup>Optional</sup> <a name="backupPolicies" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupPolicies"></a>

```typescript
public readonly backupPolicies: string[];
```

- *Type:* string[]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#backup_policies NetappVolume#backup_policies}

---

##### `backupVault`<sup>Optional</sup> <a name="backupVault" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig.property.backupVault"></a>

```typescript
public readonly backupVault: string;
```

- *Type:* string

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#backup_vault NetappVolume#backup_vault}

---

##### `scheduledBackupEnabled`<sup>Optional</sup> <a name="scheduledBackupEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```typescript
public readonly scheduledBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#scheduled_backup_enabled NetappVolume#scheduled_backup_enabled}

---

### NetappVolumeBlockDevices <a name="NetappVolumeBlockDevices" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeBlockDevices: netappVolume.NetappVolumeBlockDevices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices.property.osType">osType</a></code> | <code>string</code> | The OS type of the volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices.property.hostGroups">hostGroups</a></code> | <code>string[]</code> | A list of host groups that identify hosts that can mount the block volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices.property.name">name</a></code> | <code>string</code> | User-defined name for the block device, unique within the Volume. |

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

The OS type of the volume.

This field can't be changed after the block device is created. Possible values: ["LINUX", "WINDOWS", "ESXI"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#os_type NetappVolume#os_type}

---

##### `hostGroups`<sup>Optional</sup> <a name="hostGroups" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices.property.hostGroups"></a>

```typescript
public readonly hostGroups: string[];
```

- *Type:* string[]

A list of host groups that identify hosts that can mount the block volume.

Format:
'projects/{project_id}/locations/{location}/hostGroups/{host_group_id}'
This field can be updated after the block device is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#host_groups NetappVolume#host_groups}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User-defined name for the block device, unique within the Volume.

In case
no user input is provided, name will be autogenerated in the backend.
The name must meet the following requirements:
*   Be between 1 and 255 characters long.
*   Contain only uppercase or lowercase letters (A-Z, a-z), numbers (0-9),
    and the following special characters: "-", "_", "}", "{", ".".
*   Spaces are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#name NetappVolume#name}

---

### NetappVolumeCacheParameters <a name="NetappVolumeCacheParameters" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeCacheParameters: netappVolume.NetappVolumeCacheParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.cacheConfig">cacheConfig</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig">NetappVolumeCacheParametersCacheConfig</a></code> | cache_config block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.enableGlobalFileLock">enableGlobalFileLock</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Field indicating whether cache volume as global file lock enabled. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerClusterName">peerClusterName</a></code> | <code>string</code> | Required. Name of the origin volume's ONTAP cluster. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peeringCommandExpiryTime">peeringCommandExpiryTime</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerIpAddresses">peerIpAddresses</a></code> | <code>string[]</code> | Required. List of IC LIF addresses of the origin volume's ONTAP cluster. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerSvmName">peerSvmName</a></code> | <code>string</code> | Required. Name of the origin volume's SVM. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerVolumeName">peerVolumeName</a></code> | <code>string</code> | Required. Name of the origin volume for the cache volume. |

---

##### `cacheConfig`<sup>Optional</sup> <a name="cacheConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.cacheConfig"></a>

```typescript
public readonly cacheConfig: NetappVolumeCacheParametersCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig">NetappVolumeCacheParametersCacheConfig</a>

cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#cache_config NetappVolume#cache_config}

---

##### `enableGlobalFileLock`<sup>Optional</sup> <a name="enableGlobalFileLock" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.enableGlobalFileLock"></a>

```typescript
public readonly enableGlobalFileLock: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Field indicating whether cache volume as global file lock enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#enable_global_file_lock NetappVolume#enable_global_file_lock}

---

##### `peerClusterName`<sup>Optional</sup> <a name="peerClusterName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerClusterName"></a>

```typescript
public readonly peerClusterName: string;
```

- *Type:* string

Required. Name of the origin volume's ONTAP cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_cluster_name NetappVolume#peer_cluster_name}

---

##### `peeringCommandExpiryTime`<sup>Optional</sup> <a name="peeringCommandExpiryTime" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peeringCommandExpiryTime"></a>

```typescript
public readonly peeringCommandExpiryTime: string;
```

- *Type:* string

Optional.

Expiration time for the peering command to be executed on user's ONTAP. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peering_command_expiry_time NetappVolume#peering_command_expiry_time}

---

##### `peerIpAddresses`<sup>Optional</sup> <a name="peerIpAddresses" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerIpAddresses"></a>

```typescript
public readonly peerIpAddresses: string[];
```

- *Type:* string[]

Required. List of IC LIF addresses of the origin volume's ONTAP cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_ip_addresses NetappVolume#peer_ip_addresses}

---

##### `peerSvmName`<sup>Optional</sup> <a name="peerSvmName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerSvmName"></a>

```typescript
public readonly peerSvmName: string;
```

- *Type:* string

Required. Name of the origin volume's SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_svm_name NetappVolume#peer_svm_name}

---

##### `peerVolumeName`<sup>Optional</sup> <a name="peerVolumeName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters.property.peerVolumeName"></a>

```typescript
public readonly peerVolumeName: string;
```

- *Type:* string

Required. Name of the origin volume for the cache volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_volume_name NetappVolume#peer_volume_name}

---

### NetappVolumeCacheParametersCacheConfig <a name="NetappVolumeCacheParametersCacheConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeCacheParametersCacheConfig: netappVolume.NetappVolumeCacheParametersCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig.property.cifsChangeNotifyEnabled">cifsChangeNotifyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Flag indicating whether a CIFS change notification is enabled for the FlexCache volume. |

---

##### `cifsChangeNotifyEnabled`<sup>Optional</sup> <a name="cifsChangeNotifyEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig.property.cifsChangeNotifyEnabled"></a>

```typescript
public readonly cifsChangeNotifyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Flag indicating whether a CIFS change notification is enabled for the FlexCache volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#cifs_change_notify_enabled NetappVolume#cifs_change_notify_enabled}

---

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeConfig: netappVolume.NetappVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib">capacityGib</a></code> | <code>string</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.location">location</a></code> | <code>string</code> | Name of the pool location. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.name">name</a></code> | <code>string</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.protocols">protocols</a></code> | <code>string[]</code> | The protocol of the volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.storagePool">storagePool</a></code> | <code>string</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.blockDevices">blockDevices</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>[]</code> | block_devices block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.cacheParameters">cacheParameters</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters">NetappVolumeCacheParameters</a></code> | cache_parameters block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/netapp_volume.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy">exportPolicy</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.hybridReplicationParameters">hybridReplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a></code> | hybrid_replication_parameters block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled">kerberosEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacity">largeCapacity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacityConfig">largeCapacityConfig</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig">NetappVolumeLargeCapacityConfig</a></code> | large_capacity_config block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.multipleEndpoints">multipleEndpoints</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#project NetappVolume#project}. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters">restoreParameters</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions">restrictedActions</a></code> | <code>string[]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>string</code> | Security Style of the Volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.shareName">shareName</a></code> | <code>string</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings">smbSettings</a></code> | <code>string[]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory">snapshotDirectory</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy">snapshotPolicy</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.throughputMibps">throughputMibps</a></code> | <code>number</code> | Optional. Custom Performance Total Throughput of the pool (in MiB/s). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions">unixPermissions</a></code> | <code>string</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#capacity_gib NetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#location NetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#name NetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB", "ISCSI"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#storage_pool NetappVolume#storage_pool}

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.backupConfig"></a>

```typescript
public readonly backupConfig: NetappVolumeBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#backup_config NetappVolume#backup_config}

---

##### `blockDevices`<sup>Optional</sup> <a name="blockDevices" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.blockDevices"></a>

```typescript
public readonly blockDevices: IResolvable | NetappVolumeBlockDevices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>[]

block_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#block_devices NetappVolume#block_devices}

---

##### `cacheParameters`<sup>Optional</sup> <a name="cacheParameters" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.cacheParameters"></a>

```typescript
public readonly cacheParameters: NetappVolumeCacheParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters">NetappVolumeCacheParameters</a>

cache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#cache_parameters NetappVolume#cache_parameters}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/netapp_volume.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#deletion_policy NetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `exportPolicy`<sup>Optional</sup> <a name="exportPolicy" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.exportPolicy"></a>

```typescript
public readonly exportPolicy: NetappVolumeExportPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#export_policy NetappVolume#export_policy}

---

##### `hybridReplicationParameters`<sup>Optional</sup> <a name="hybridReplicationParameters" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.hybridReplicationParameters"></a>

```typescript
public readonly hybridReplicationParameters: NetappVolumeHybridReplicationParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

hybrid_replication_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#hybrid_replication_parameters NetappVolume#hybrid_replication_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberosEnabled`<sup>Optional</sup> <a name="kerberosEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```typescript
public readonly kerberosEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `largeCapacity`<sup>Optional</sup> <a name="largeCapacity" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacity"></a>

```typescript
public readonly largeCapacity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#large_capacity NetappVolume#large_capacity}

---

##### `largeCapacityConfig`<sup>Optional</sup> <a name="largeCapacityConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.largeCapacityConfig"></a>

```typescript
public readonly largeCapacityConfig: NetappVolumeLargeCapacityConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig">NetappVolumeLargeCapacityConfig</a>

large_capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#large_capacity_config NetappVolume#large_capacity_config}

---

##### `multipleEndpoints`<sup>Optional</sup> <a name="multipleEndpoints" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.multipleEndpoints"></a>

```typescript
public readonly multipleEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#multiple_endpoints NetappVolume#multiple_endpoints}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#project NetappVolume#project}.

---

##### `restoreParameters`<sup>Optional</sup> <a name="restoreParameters" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.restoreParameters"></a>

```typescript
public readonly restoreParameters: NetappVolumeRestoreParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#restore_parameters NetappVolume#restore_parameters}

---

##### `restrictedActions`<sup>Optional</sup> <a name="restrictedActions" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.restrictedActions"></a>

```typescript
public readonly restrictedActions: string[];
```

- *Type:* string[]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#restricted_actions NetappVolume#restricted_actions}

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#share_name NetappVolume#share_name}

---

##### `smbSettings`<sup>Optional</sup> <a name="smbSettings" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.smbSettings"></a>

```typescript
public readonly smbSettings: string[];
```

- *Type:* string[]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#smb_settings NetappVolume#smb_settings}

---

##### `snapshotDirectory`<sup>Optional</sup> <a name="snapshotDirectory" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.snapshotDirectory"></a>

```typescript
public readonly snapshotDirectory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#snapshot_directory NetappVolume#snapshot_directory}

---

##### `snapshotPolicy`<sup>Optional</sup> <a name="snapshotPolicy" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.snapshotPolicy"></a>

```typescript
public readonly snapshotPolicy: NetappVolumeSnapshotPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#snapshot_policy NetappVolume#snapshot_policy}

---

##### `throughputMibps`<sup>Optional</sup> <a name="throughputMibps" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.throughputMibps"></a>

```typescript
public readonly throughputMibps: number;
```

- *Type:* number

Optional. Custom Performance Total Throughput of the pool (in MiB/s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#throughput_mibps NetappVolume#throughput_mibps}

---

##### `tieringPolicy`<sup>Optional</sup> <a name="tieringPolicy" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: NetappVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetappVolumeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `unixPermissions`<sup>Optional</sup> <a name="unixPermissions" id="@cdktn/provider-google.netappVolume.NetappVolumeConfig.property.unixPermissions"></a>

```typescript
public readonly unixPermissions: string;
```

- *Type:* string

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#unix_permissions NetappVolume#unix_permissions}

---

### NetappVolumeExportPolicy <a name="NetappVolumeExportPolicy" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeExportPolicy: netappVolume.NetappVolumeExportPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>[]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy.property.rules"></a>

```typescript
public readonly rules: IResolvable | NetappVolumeExportPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#rules NetappVolume#rules}

---

### NetappVolumeExportPolicyRules <a name="NetappVolumeExportPolicyRules" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeExportPolicyRules: netappVolume.NetappVolumeExportPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType">accessType</a></code> | <code>string</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients">allowedClients</a></code> | <code>string</code> | Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.anonUid">anonUid</a></code> | <code>number</code> | An integer representing the anonymous user ID. Range is 0 to 4294967295. Required when 'squash_mode' is 'ALL_SQUASH'. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess">hasRootAccess</a></code> | <code>string</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly">kerberos5IReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite">kerberos5IReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly">kerberos5PReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite">kerberos5PReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly">kerberos5ReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite">kerberos5ReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3">nfsv3</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4">nfsv4</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable to apply the export rule to NFSV4.1 clients. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.squashMode">squashMode</a></code> | <code>string</code> | SquashMode defines how remote user privileges are restricted when accessing an NFS export. |

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#access_type NetappVolume#access_type}

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.allowedClients"></a>

```typescript
public readonly allowedClients: string;
```

- *Type:* string

Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}

---

##### `anonUid`<sup>Optional</sup> <a name="anonUid" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.anonUid"></a>

```typescript
public readonly anonUid: number;
```

- *Type:* number

An integer representing the anonymous user ID. Range is 0 to 4294967295. Required when 'squash_mode' is 'ALL_SQUASH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#anon_uid NetappVolume#anon_uid}

---

##### `hasRootAccess`<sup>Optional</sup> <a name="hasRootAccess" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```typescript
public readonly hasRootAccess: string;
```

- *Type:* string

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.
Use either squash_mode or has_root_access, but never both at the same time. These parameters are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#has_root_access NetappVolume#has_root_access}

---

##### `kerberos5IReadOnly`<sup>Optional</sup> <a name="kerberos5IReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```typescript
public readonly kerberos5IReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#kerberos5i_read_only NetappVolume#kerberos5i_read_only}

---

##### `kerberos5IReadWrite`<sup>Optional</sup> <a name="kerberos5IReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```typescript
public readonly kerberos5IReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#kerberos5i_read_write NetappVolume#kerberos5i_read_write}

---

##### `kerberos5PReadOnly`<sup>Optional</sup> <a name="kerberos5PReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```typescript
public readonly kerberos5PReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#kerberos5p_read_only NetappVolume#kerberos5p_read_only}

---

##### `kerberos5PReadWrite`<sup>Optional</sup> <a name="kerberos5PReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```typescript
public readonly kerberos5PReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#kerberos5p_read_write NetappVolume#kerberos5p_read_write}

---

##### `kerberos5ReadOnly`<sup>Optional</sup> <a name="kerberos5ReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```typescript
public readonly kerberos5ReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#kerberos5_read_only NetappVolume#kerberos5_read_only}

---

##### `kerberos5ReadWrite`<sup>Optional</sup> <a name="kerberos5ReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```typescript
public readonly kerberos5ReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#kerberos5_read_write NetappVolume#kerberos5_read_write}

---

##### `nfsv3`<sup>Optional</sup> <a name="nfsv3" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv3"></a>

```typescript
public readonly nfsv3: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#nfsv3 NetappVolume#nfsv3}

---

##### `nfsv4`<sup>Optional</sup> <a name="nfsv4" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.nfsv4"></a>

```typescript
public readonly nfsv4: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#nfsv4 NetappVolume#nfsv4}

---

##### `squashMode`<sup>Optional</sup> <a name="squashMode" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

SquashMode defines how remote user privileges are restricted when accessing an NFS export.

It controls how the user identities (like root) are mapped to anonymous users to limit access and enforce security.
Use either squash_mode or has_root_access, but never both at the same time. These parameters are mutually exclusive. Possible values: ["SQUASH_MODE_UNSPECIFIED", "NO_ROOT_SQUASH", "ROOT_SQUASH", "ALL_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#squash_mode NetappVolume#squash_mode}

---

### NetappVolumeHybridReplicationParameters <a name="NetappVolumeHybridReplicationParameters" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeHybridReplicationParameters: netappVolume.NetappVolumeHybridReplicationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.clusterLocation">clusterLocation</a></code> | <code>string</code> | Optional. Name of source cluster location associated with the replication. This is a free-form field for display purposes only. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.description">description</a></code> | <code>string</code> | Optional. Description of the replication. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.hybridReplicationType">hybridReplicationType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.largeVolumeConstituentCount">largeVolumeConstituentCount</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerClusterName">peerClusterName</a></code> | <code>string</code> | Required. Name of the ONTAP source cluster to be peered with NetApp Volumes. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerIpAddresses">peerIpAddresses</a></code> | <code>string[]</code> | Required. List of all intercluster LIF IP addresses of the ONTAP source cluster. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerSvmName">peerSvmName</a></code> | <code>string</code> | Required. Name of the ONTAP source vserver SVM to be peered with NetApp Volumes. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerVolumeName">peerVolumeName</a></code> | <code>string</code> | Required. Name of the ONTAP source volume to be replicated to NetApp Volumes destination volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.replication">replication</a></code> | <code>string</code> | Required. Desired name for the replication of this volume. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | Optional. Replication Schedule for the replication created. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |

---

##### `clusterLocation`<sup>Optional</sup> <a name="clusterLocation" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.clusterLocation"></a>

```typescript
public readonly clusterLocation: string;
```

- *Type:* string

Optional. Name of source cluster location associated with the replication. This is a free-form field for display purposes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#cluster_location NetappVolume#cluster_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#description NetappVolume#description}

---

##### `hybridReplicationType`<sup>Optional</sup> <a name="hybridReplicationType" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.hybridReplicationType"></a>

```typescript
public readonly hybridReplicationType: string;
```

- *Type:* string

Optional.

Type of the hybrid replication. Use 'MIGRATION' to create a volume migration
and 'ONPREM_REPLICATION' to create an external replication.
Other values are read-only. 'REVERSE_ONPREM_REPLICATION' is used to represent an external
replication which got reversed. Default is 'MIGRATION'. Possible values: ["MIGRATION", "CONTINUOUS_REPLICATION", "ONPREM_REPLICATION", "REVERSE_ONPREM_REPLICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#hybrid_replication_type NetappVolume#hybrid_replication_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Labels to be added to the replication as the key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#labels NetappVolume#labels}

---

##### `largeVolumeConstituentCount`<sup>Optional</sup> <a name="largeVolumeConstituentCount" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.largeVolumeConstituentCount"></a>

```typescript
public readonly largeVolumeConstituentCount: number;
```

- *Type:* number

Optional.

If the source is a FlexGroup volume, this field needs to match the number of constituents in the FlexGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#large_volume_constituent_count NetappVolume#large_volume_constituent_count}

---

##### `peerClusterName`<sup>Optional</sup> <a name="peerClusterName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerClusterName"></a>

```typescript
public readonly peerClusterName: string;
```

- *Type:* string

Required. Name of the ONTAP source cluster to be peered with NetApp Volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_cluster_name NetappVolume#peer_cluster_name}

---

##### `peerIpAddresses`<sup>Optional</sup> <a name="peerIpAddresses" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerIpAddresses"></a>

```typescript
public readonly peerIpAddresses: string[];
```

- *Type:* string[]

Required. List of all intercluster LIF IP addresses of the ONTAP source cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_ip_addresses NetappVolume#peer_ip_addresses}

---

##### `peerSvmName`<sup>Optional</sup> <a name="peerSvmName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerSvmName"></a>

```typescript
public readonly peerSvmName: string;
```

- *Type:* string

Required. Name of the ONTAP source vserver SVM to be peered with NetApp Volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_svm_name NetappVolume#peer_svm_name}

---

##### `peerVolumeName`<sup>Optional</sup> <a name="peerVolumeName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.peerVolumeName"></a>

```typescript
public readonly peerVolumeName: string;
```

- *Type:* string

Required. Name of the ONTAP source volume to be replicated to NetApp Volumes destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#peer_volume_name NetappVolume#peer_volume_name}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.replication"></a>

```typescript
public readonly replication: string;
```

- *Type:* string

Required. Desired name for the replication of this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#replication NetappVolume#replication}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

Optional. Replication Schedule for the replication created. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#replication_schedule NetappVolume#replication_schedule}

---

### NetappVolumeLargeCapacityConfig <a name="NetappVolumeLargeCapacityConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeLargeCapacityConfig: netappVolume.NetappVolumeLargeCapacityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig.property.constituentCount">constituentCount</a></code> | <code>number</code> | The number of internal constituents (e.g., FlexVols) for this large volume. The minimum number of constituents is 2. |

---

##### `constituentCount`<sup>Optional</sup> <a name="constituentCount" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig.property.constituentCount"></a>

```typescript
public readonly constituentCount: number;
```

- *Type:* number

The number of internal constituents (e.g., FlexVols) for this large volume. The minimum number of constituents is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#constituent_count NetappVolume#constituent_count}

---

### NetappVolumeMountOptions <a name="NetappVolumeMountOptions" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptions.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeMountOptions: netappVolume.NetappVolumeMountOptions = { ... }
```


### NetappVolumeRestoreParameters <a name="NetappVolumeRestoreParameters" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeRestoreParameters: netappVolume.NetappVolumeRestoreParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `sourceBackup`<sup>Optional</sup> <a name="sourceBackup" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#source_backup NetappVolume#source_backup}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#source_snapshot NetappVolume#source_snapshot}

---

### NetappVolumeSnapshotPolicy <a name="NetappVolumeSnapshotPolicy" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeSnapshotPolicy: netappVolume.NetappVolumeSnapshotPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: NetappVolumeSnapshotPolicyDailySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#daily_schedule NetappVolume#daily_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#enabled NetappVolume#enabled}

---

##### `hourlySchedule`<sup>Optional</sup> <a name="hourlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```typescript
public readonly hourlySchedule: NetappVolumeSnapshotPolicyHourlySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#hourly_schedule NetappVolume#hourly_schedule}

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: NetappVolumeSnapshotPolicyMonthlySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#monthly_schedule NetappVolume#monthly_schedule}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: NetappVolumeSnapshotPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#weekly_schedule NetappVolume#weekly_schedule}

---

### NetappVolumeSnapshotPolicyDailySchedule <a name="NetappVolumeSnapshotPolicyDailySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeSnapshotPolicyDailySchedule: netappVolume.NetappVolumeSnapshotPolicyDailySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour">hour</a></code> | <code>number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyHourlySchedule <a name="NetappVolumeSnapshotPolicyHourlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeSnapshotPolicyHourlySchedule: netappVolume.NetappVolumeSnapshotPolicyHourlySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyMonthlySchedule <a name="NetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeSnapshotPolicyMonthlySchedule: netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">daysOfMonth</a></code> | <code>string</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour">hour</a></code> | <code>number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: string;
```

- *Type:* string

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#days_of_month NetappVolume#days_of_month}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeSnapshotPolicyWeeklySchedule <a name="NetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeSnapshotPolicyWeeklySchedule: netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day">day</a></code> | <code>string</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour">hour</a></code> | <code>number</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute">minute</a></code> | <code>number</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#snapshots_to_keep NetappVolume#snapshots_to_keep}

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#day NetappVolume#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#hour NetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#minute NetappVolume#minute}

---

### NetappVolumeTieringPolicy <a name="NetappVolumeTieringPolicy" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeTieringPolicy: netappVolume.NetappVolumeTieringPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy.property.coolingThresholdDays">coolingThresholdDays</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy.property.hotTierBypassModeEnabled">hotTierBypassModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Flag indicating that the hot tier bypass mode is enabled. Default is false. Only applicable to Flex service level. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy.property.tierAction">tierAction</a></code> | <code>string</code> | Optional. |

---

##### `coolingThresholdDays`<sup>Optional</sup> <a name="coolingThresholdDays" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy.property.coolingThresholdDays"></a>

```typescript
public readonly coolingThresholdDays: number;
```

- *Type:* number

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#cooling_threshold_days NetappVolume#cooling_threshold_days}

---

##### `hotTierBypassModeEnabled`<sup>Optional</sup> <a name="hotTierBypassModeEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy.property.hotTierBypassModeEnabled"></a>

```typescript
public readonly hotTierBypassModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Flag indicating that the hot tier bypass mode is enabled. Default is false. Only applicable to Flex service level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#hot_tier_bypass_mode_enabled NetappVolume#hot_tier_bypass_mode_enabled}

---

##### `tierAction`<sup>Optional</sup> <a name="tierAction" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy.property.tierAction"></a>

```typescript
public readonly tierAction: string;
```

- *Type:* string

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#tier_action NetappVolume#tier_action}

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

const netappVolumeTimeouts: netappVolume.NetappVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBackupConfigOutputReference <a name="NetappVolumeBackupConfigOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupPolicies">resetBackupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupVault">resetBackupVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled">resetScheduledBackupEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupPolicies` <a name="resetBackupPolicies" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```typescript
public resetBackupPolicies(): void
```

##### `resetBackupVault` <a name="resetBackupVault" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```typescript
public resetBackupVault(): void
```

##### `resetScheduledBackupEnabled` <a name="resetScheduledBackupEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```typescript
public resetScheduledBackupEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">backupPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput">backupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">scheduledBackupEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies">backupPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault">backupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">scheduledBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPoliciesInput`<sup>Optional</sup> <a name="backupPoliciesInput" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```typescript
public readonly backupPoliciesInput: string[];
```

- *Type:* string[]

---

##### `backupVaultInput`<sup>Optional</sup> <a name="backupVaultInput" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```typescript
public readonly backupVaultInput: string;
```

- *Type:* string

---

##### `scheduledBackupEnabledInput`<sup>Optional</sup> <a name="scheduledBackupEnabledInput" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```typescript
public readonly scheduledBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `backupPolicies`<sup>Required</sup> <a name="backupPolicies" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```typescript
public readonly backupPolicies: string[];
```

- *Type:* string[]

---

##### `backupVault`<sup>Required</sup> <a name="backupVault" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```typescript
public readonly backupVault: string;
```

- *Type:* string

---

##### `scheduledBackupEnabled`<sup>Required</sup> <a name="scheduledBackupEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```typescript
public readonly scheduledBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBackupConfig">NetappVolumeBackupConfig</a>

---


### NetappVolumeBlockDevicesList <a name="NetappVolumeBlockDevicesList" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeBlockDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.get"></a>

```typescript
public get(index: number): NetappVolumeBlockDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeBlockDevices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>[]

---


### NetappVolumeBlockDevicesOutputReference <a name="NetappVolumeBlockDevicesOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeBlockDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.resetHostGroups">resetHostGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostGroups` <a name="resetHostGroups" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.resetHostGroups"></a>

```typescript
public resetHostGroups(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.hostGroupsInput">hostGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.hostGroups">hostGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `hostGroupsInput`<sup>Optional</sup> <a name="hostGroupsInput" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.hostGroupsInput"></a>

```typescript
public readonly hostGroupsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `hostGroups`<sup>Required</sup> <a name="hostGroups" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.hostGroups"></a>

```typescript
public readonly hostGroups: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeBlockDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeBlockDevices;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeBlockDevices">NetappVolumeBlockDevices</a>

---


### NetappVolumeCacheParametersCacheConfigOutputReference <a name="NetappVolumeCacheParametersCacheConfigOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.resetCifsChangeNotifyEnabled">resetCifsChangeNotifyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCifsChangeNotifyEnabled` <a name="resetCifsChangeNotifyEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.resetCifsChangeNotifyEnabled"></a>

```typescript
public resetCifsChangeNotifyEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabledInput">cifsChangeNotifyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabled">cifsChangeNotifyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig">NetappVolumeCacheParametersCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cifsChangeNotifyEnabledInput`<sup>Optional</sup> <a name="cifsChangeNotifyEnabledInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabledInput"></a>

```typescript
public readonly cifsChangeNotifyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cifsChangeNotifyEnabled`<sup>Required</sup> <a name="cifsChangeNotifyEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabled"></a>

```typescript
public readonly cifsChangeNotifyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeCacheParametersCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig">NetappVolumeCacheParametersCacheConfig</a>

---


### NetappVolumeCacheParametersOutputReference <a name="NetappVolumeCacheParametersOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeCacheParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.putCacheConfig">putCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetCacheConfig">resetCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetEnableGlobalFileLock">resetEnableGlobalFileLock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerClusterName">resetPeerClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeeringCommandExpiryTime">resetPeeringCommandExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerIpAddresses">resetPeerIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerSvmName">resetPeerSvmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerVolumeName">resetPeerVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheConfig` <a name="putCacheConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.putCacheConfig"></a>

```typescript
public putCacheConfig(value: NetappVolumeCacheParametersCacheConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.putCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig">NetappVolumeCacheParametersCacheConfig</a>

---

##### `resetCacheConfig` <a name="resetCacheConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetCacheConfig"></a>

```typescript
public resetCacheConfig(): void
```

##### `resetEnableGlobalFileLock` <a name="resetEnableGlobalFileLock" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetEnableGlobalFileLock"></a>

```typescript
public resetEnableGlobalFileLock(): void
```

##### `resetPeerClusterName` <a name="resetPeerClusterName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerClusterName"></a>

```typescript
public resetPeerClusterName(): void
```

##### `resetPeeringCommandExpiryTime` <a name="resetPeeringCommandExpiryTime" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeeringCommandExpiryTime"></a>

```typescript
public resetPeeringCommandExpiryTime(): void
```

##### `resetPeerIpAddresses` <a name="resetPeerIpAddresses" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerIpAddresses"></a>

```typescript
public resetPeerIpAddresses(): void
```

##### `resetPeerSvmName` <a name="resetPeerSvmName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerSvmName"></a>

```typescript
public resetPeerSvmName(): void
```

##### `resetPeerVolumeName` <a name="resetPeerVolumeName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.resetPeerVolumeName"></a>

```typescript
public resetPeerVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.cacheConfig">cacheConfig</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference">NetappVolumeCacheParametersCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.cacheState">cacheState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.passphrase">passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.cacheConfigInput">cacheConfigInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig">NetappVolumeCacheParametersCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.enableGlobalFileLockInput">enableGlobalFileLockInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerClusterNameInput">peerClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTimeInput">peeringCommandExpiryTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerIpAddressesInput">peerIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerSvmNameInput">peerSvmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerVolumeNameInput">peerVolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.enableGlobalFileLock">enableGlobalFileLock</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerClusterName">peerClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTime">peeringCommandExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerIpAddresses">peerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerSvmName">peerSvmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerVolumeName">peerVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters">NetappVolumeCacheParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheConfig`<sup>Required</sup> <a name="cacheConfig" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.cacheConfig"></a>

```typescript
public readonly cacheConfig: NetappVolumeCacheParametersCacheConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfigOutputReference">NetappVolumeCacheParametersCacheConfigOutputReference</a>

---

##### `cacheState`<sup>Required</sup> <a name="cacheState" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.cacheState"></a>

```typescript
public readonly cacheState: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `cacheConfigInput`<sup>Optional</sup> <a name="cacheConfigInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.cacheConfigInput"></a>

```typescript
public readonly cacheConfigInput: NetappVolumeCacheParametersCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersCacheConfig">NetappVolumeCacheParametersCacheConfig</a>

---

##### `enableGlobalFileLockInput`<sup>Optional</sup> <a name="enableGlobalFileLockInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.enableGlobalFileLockInput"></a>

```typescript
public readonly enableGlobalFileLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `peerClusterNameInput`<sup>Optional</sup> <a name="peerClusterNameInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerClusterNameInput"></a>

```typescript
public readonly peerClusterNameInput: string;
```

- *Type:* string

---

##### `peeringCommandExpiryTimeInput`<sup>Optional</sup> <a name="peeringCommandExpiryTimeInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTimeInput"></a>

```typescript
public readonly peeringCommandExpiryTimeInput: string;
```

- *Type:* string

---

##### `peerIpAddressesInput`<sup>Optional</sup> <a name="peerIpAddressesInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerIpAddressesInput"></a>

```typescript
public readonly peerIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `peerSvmNameInput`<sup>Optional</sup> <a name="peerSvmNameInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerSvmNameInput"></a>

```typescript
public readonly peerSvmNameInput: string;
```

- *Type:* string

---

##### `peerVolumeNameInput`<sup>Optional</sup> <a name="peerVolumeNameInput" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerVolumeNameInput"></a>

```typescript
public readonly peerVolumeNameInput: string;
```

- *Type:* string

---

##### `enableGlobalFileLock`<sup>Required</sup> <a name="enableGlobalFileLock" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.enableGlobalFileLock"></a>

```typescript
public readonly enableGlobalFileLock: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `peerClusterName`<sup>Required</sup> <a name="peerClusterName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerClusterName"></a>

```typescript
public readonly peerClusterName: string;
```

- *Type:* string

---

##### `peeringCommandExpiryTime`<sup>Required</sup> <a name="peeringCommandExpiryTime" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTime"></a>

```typescript
public readonly peeringCommandExpiryTime: string;
```

- *Type:* string

---

##### `peerIpAddresses`<sup>Required</sup> <a name="peerIpAddresses" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerIpAddresses"></a>

```typescript
public readonly peerIpAddresses: string[];
```

- *Type:* string[]

---

##### `peerSvmName`<sup>Required</sup> <a name="peerSvmName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerSvmName"></a>

```typescript
public readonly peerSvmName: string;
```

- *Type:* string

---

##### `peerVolumeName`<sup>Required</sup> <a name="peerVolumeName" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.peerVolumeName"></a>

```typescript
public readonly peerVolumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeCacheParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeCacheParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeCacheParameters">NetappVolumeCacheParameters</a>

---


### NetappVolumeExportPolicyOutputReference <a name="NetappVolumeExportPolicyOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeExportPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | NetappVolumeExportPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rules"></a>

```typescript
public readonly rules: NetappVolumeExportPolicyRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList">NetappVolumeExportPolicyRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | NetappVolumeExportPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeExportPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicy">NetappVolumeExportPolicy</a>

---


### NetappVolumeExportPolicyRulesList <a name="NetappVolumeExportPolicyRulesList" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeExportPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get"></a>

```typescript
public get(index: number): NetappVolumeExportPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeExportPolicyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>[]

---


### NetappVolumeExportPolicyRulesOutputReference <a name="NetappVolumeExportPolicyRulesOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeExportPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAnonUid">resetAnonUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">resetHasRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">resetKerberos5IReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">resetKerberos5IReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">resetKerberos5PReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">resetKerberos5PReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">resetKerberos5ReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">resetKerberos5ReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3">resetNfsv3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4">resetNfsv4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetSquashMode">resetSquashMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessType` <a name="resetAccessType" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```typescript
public resetAccessType(): void
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```typescript
public resetAllowedClients(): void
```

##### `resetAnonUid` <a name="resetAnonUid" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetAnonUid"></a>

```typescript
public resetAnonUid(): void
```

##### `resetHasRootAccess` <a name="resetHasRootAccess" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```typescript
public resetHasRootAccess(): void
```

##### `resetKerberos5IReadOnly` <a name="resetKerberos5IReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```typescript
public resetKerberos5IReadOnly(): void
```

##### `resetKerberos5IReadWrite` <a name="resetKerberos5IReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```typescript
public resetKerberos5IReadWrite(): void
```

##### `resetKerberos5PReadOnly` <a name="resetKerberos5PReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```typescript
public resetKerberos5PReadOnly(): void
```

##### `resetKerberos5PReadWrite` <a name="resetKerberos5PReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```typescript
public resetKerberos5PReadWrite(): void
```

##### `resetKerberos5ReadOnly` <a name="resetKerberos5ReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```typescript
public resetKerberos5ReadOnly(): void
```

##### `resetKerberos5ReadWrite` <a name="resetKerberos5ReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```typescript
public resetKerberos5ReadWrite(): void
```

##### `resetNfsv3` <a name="resetNfsv3" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```typescript
public resetNfsv3(): void
```

##### `resetNfsv4` <a name="resetNfsv4" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```typescript
public resetNfsv4(): void
```

##### `resetSquashMode` <a name="resetSquashMode" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.resetSquashMode"></a>

```typescript
public resetSquashMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.anonUidInput">anonUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">hasRootAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">kerberos5IReadOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">kerberos5IReadWriteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">kerberos5PReadOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">kerberos5PReadWriteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">kerberos5ReadOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">kerberos5ReadWriteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">nfsv3Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">nfsv4Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.squashModeInput">squashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients">allowedClients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.anonUid">anonUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">hasRootAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">kerberos5IReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">kerberos5IReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">kerberos5PReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">kerberos5PReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">kerberos5ReadOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">kerberos5ReadWrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3">nfsv3</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4">nfsv4</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.squashMode">squashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```typescript
public readonly allowedClientsInput: string;
```

- *Type:* string

---

##### `anonUidInput`<sup>Optional</sup> <a name="anonUidInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.anonUidInput"></a>

```typescript
public readonly anonUidInput: number;
```

- *Type:* number

---

##### `hasRootAccessInput`<sup>Optional</sup> <a name="hasRootAccessInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```typescript
public readonly hasRootAccessInput: string;
```

- *Type:* string

---

##### `kerberos5IReadOnlyInput`<sup>Optional</sup> <a name="kerberos5IReadOnlyInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```typescript
public readonly kerberos5IReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5IReadWriteInput`<sup>Optional</sup> <a name="kerberos5IReadWriteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```typescript
public readonly kerberos5IReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadOnlyInput`<sup>Optional</sup> <a name="kerberos5PReadOnlyInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```typescript
public readonly kerberos5PReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadWriteInput`<sup>Optional</sup> <a name="kerberos5PReadWriteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```typescript
public readonly kerberos5PReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadOnlyInput`<sup>Optional</sup> <a name="kerberos5ReadOnlyInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```typescript
public readonly kerberos5ReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadWriteInput`<sup>Optional</sup> <a name="kerberos5ReadWriteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```typescript
public readonly kerberos5ReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nfsv3Input`<sup>Optional</sup> <a name="nfsv3Input" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```typescript
public readonly nfsv3Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nfsv4Input`<sup>Optional</sup> <a name="nfsv4Input" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```typescript
public readonly nfsv4Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `squashModeInput`<sup>Optional</sup> <a name="squashModeInput" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.squashModeInput"></a>

```typescript
public readonly squashModeInput: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```typescript
public readonly allowedClients: string;
```

- *Type:* string

---

##### `anonUid`<sup>Required</sup> <a name="anonUid" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.anonUid"></a>

```typescript
public readonly anonUid: number;
```

- *Type:* number

---

##### `hasRootAccess`<sup>Required</sup> <a name="hasRootAccess" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```typescript
public readonly hasRootAccess: string;
```

- *Type:* string

---

##### `kerberos5IReadOnly`<sup>Required</sup> <a name="kerberos5IReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```typescript
public readonly kerberos5IReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5IReadWrite`<sup>Required</sup> <a name="kerberos5IReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```typescript
public readonly kerberos5IReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadOnly`<sup>Required</sup> <a name="kerberos5PReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```typescript
public readonly kerberos5PReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5PReadWrite`<sup>Required</sup> <a name="kerberos5PReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```typescript
public readonly kerberos5PReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadOnly`<sup>Required</sup> <a name="kerberos5ReadOnly" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```typescript
public readonly kerberos5ReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kerberos5ReadWrite`<sup>Required</sup> <a name="kerberos5ReadWrite" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```typescript
public readonly kerberos5ReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nfsv3`<sup>Required</sup> <a name="nfsv3" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```typescript
public readonly nfsv3: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nfsv4`<sup>Required</sup> <a name="nfsv4" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```typescript
public readonly nfsv4: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `squashMode`<sup>Required</sup> <a name="squashMode" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeExportPolicyRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeExportPolicyRules">NetappVolumeExportPolicyRules</a>

---


### NetappVolumeHybridReplicationParametersOutputReference <a name="NetappVolumeHybridReplicationParametersOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeHybridReplicationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetClusterLocation">resetClusterLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetHybridReplicationType">resetHybridReplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetLargeVolumeConstituentCount">resetLargeVolumeConstituentCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerClusterName">resetPeerClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerIpAddresses">resetPeerIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerSvmName">resetPeerSvmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerVolumeName">resetPeerVolumeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetReplication">resetReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetReplicationSchedule">resetReplicationSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterLocation` <a name="resetClusterLocation" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetClusterLocation"></a>

```typescript
public resetClusterLocation(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHybridReplicationType` <a name="resetHybridReplicationType" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetHybridReplicationType"></a>

```typescript
public resetHybridReplicationType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLargeVolumeConstituentCount` <a name="resetLargeVolumeConstituentCount" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetLargeVolumeConstituentCount"></a>

```typescript
public resetLargeVolumeConstituentCount(): void
```

##### `resetPeerClusterName` <a name="resetPeerClusterName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerClusterName"></a>

```typescript
public resetPeerClusterName(): void
```

##### `resetPeerIpAddresses` <a name="resetPeerIpAddresses" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerIpAddresses"></a>

```typescript
public resetPeerIpAddresses(): void
```

##### `resetPeerSvmName` <a name="resetPeerSvmName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerSvmName"></a>

```typescript
public resetPeerSvmName(): void
```

##### `resetPeerVolumeName` <a name="resetPeerVolumeName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetPeerVolumeName"></a>

```typescript
public resetPeerVolumeName(): void
```

##### `resetReplication` <a name="resetReplication" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetReplication"></a>

```typescript
public resetReplication(): void
```

##### `resetReplicationSchedule` <a name="resetReplicationSchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.resetReplicationSchedule"></a>

```typescript
public resetReplicationSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocationInput">clusterLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationTypeInput">hybridReplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCountInput">largeVolumeConstituentCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterNameInput">peerClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddressesInput">peerIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmNameInput">peerSvmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeNameInput">peerVolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationInput">replicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocation">clusterLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationType">hybridReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCount">largeVolumeConstituentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterName">peerClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddresses">peerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmName">peerSvmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeName">peerVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replication">replication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterLocationInput`<sup>Optional</sup> <a name="clusterLocationInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocationInput"></a>

```typescript
public readonly clusterLocationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hybridReplicationTypeInput`<sup>Optional</sup> <a name="hybridReplicationTypeInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationTypeInput"></a>

```typescript
public readonly hybridReplicationTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `largeVolumeConstituentCountInput`<sup>Optional</sup> <a name="largeVolumeConstituentCountInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCountInput"></a>

```typescript
public readonly largeVolumeConstituentCountInput: number;
```

- *Type:* number

---

##### `peerClusterNameInput`<sup>Optional</sup> <a name="peerClusterNameInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterNameInput"></a>

```typescript
public readonly peerClusterNameInput: string;
```

- *Type:* string

---

##### `peerIpAddressesInput`<sup>Optional</sup> <a name="peerIpAddressesInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddressesInput"></a>

```typescript
public readonly peerIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `peerSvmNameInput`<sup>Optional</sup> <a name="peerSvmNameInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmNameInput"></a>

```typescript
public readonly peerSvmNameInput: string;
```

- *Type:* string

---

##### `peerVolumeNameInput`<sup>Optional</sup> <a name="peerVolumeNameInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeNameInput"></a>

```typescript
public readonly peerVolumeNameInput: string;
```

- *Type:* string

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationInput"></a>

```typescript
public readonly replicationInput: string;
```

- *Type:* string

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationScheduleInput"></a>

```typescript
public readonly replicationScheduleInput: string;
```

- *Type:* string

---

##### `clusterLocation`<sup>Required</sup> <a name="clusterLocation" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.clusterLocation"></a>

```typescript
public readonly clusterLocation: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hybridReplicationType`<sup>Required</sup> <a name="hybridReplicationType" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationType"></a>

```typescript
public readonly hybridReplicationType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `largeVolumeConstituentCount`<sup>Required</sup> <a name="largeVolumeConstituentCount" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCount"></a>

```typescript
public readonly largeVolumeConstituentCount: number;
```

- *Type:* number

---

##### `peerClusterName`<sup>Required</sup> <a name="peerClusterName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerClusterName"></a>

```typescript
public readonly peerClusterName: string;
```

- *Type:* string

---

##### `peerIpAddresses`<sup>Required</sup> <a name="peerIpAddresses" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddresses"></a>

```typescript
public readonly peerIpAddresses: string[];
```

- *Type:* string[]

---

##### `peerSvmName`<sup>Required</sup> <a name="peerSvmName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerSvmName"></a>

```typescript
public readonly peerSvmName: string;
```

- *Type:* string

---

##### `peerVolumeName`<sup>Required</sup> <a name="peerVolumeName" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeName"></a>

```typescript
public readonly peerVolumeName: string;
```

- *Type:* string

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replication"></a>

```typescript
public readonly replication: string;
```

- *Type:* string

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeHybridReplicationParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeHybridReplicationParameters">NetappVolumeHybridReplicationParameters</a>

---


### NetappVolumeLargeCapacityConfigOutputReference <a name="NetappVolumeLargeCapacityConfigOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeLargeCapacityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.resetConstituentCount">resetConstituentCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstituentCount` <a name="resetConstituentCount" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.resetConstituentCount"></a>

```typescript
public resetConstituentCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.constituentCountInput">constituentCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.constituentCount">constituentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig">NetappVolumeLargeCapacityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constituentCountInput`<sup>Optional</sup> <a name="constituentCountInput" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.constituentCountInput"></a>

```typescript
public readonly constituentCountInput: number;
```

- *Type:* number

---

##### `constituentCount`<sup>Required</sup> <a name="constituentCount" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.constituentCount"></a>

```typescript
public readonly constituentCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeLargeCapacityConfig;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeLargeCapacityConfig">NetappVolumeLargeCapacityConfig</a>

---


### NetappVolumeMountOptionsList <a name="NetappVolumeMountOptionsList" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeMountOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.get"></a>

```typescript
public get(index: number): NetappVolumeMountOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetappVolumeMountOptionsOutputReference <a name="NetappVolumeMountOptionsOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export">export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull">exportFull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions">instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.export"></a>

```typescript
public readonly export: string;
```

- *Type:* string

---

##### `exportFull`<sup>Required</sup> <a name="exportFull" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```typescript
public readonly exportFull: string;
```

- *Type:* string

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeMountOptions;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeMountOptions">NetappVolumeMountOptions</a>

---


### NetappVolumeRestoreParametersOutputReference <a name="NetappVolumeRestoreParametersOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeRestoreParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup">resetSourceBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceBackup` <a name="resetSourceBackup" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```typescript
public resetSourceBackup(): void
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```typescript
public resetSourceSnapshot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">sourceBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup">sourceBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceBackupInput`<sup>Optional</sup> <a name="sourceBackupInput" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```typescript
public readonly sourceBackupInput: string;
```

- *Type:* string

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```typescript
public readonly sourceSnapshotInput: string;
```

- *Type:* string

---

##### `sourceBackup`<sup>Required</sup> <a name="sourceBackup" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```typescript
public readonly sourceBackup: string;
```

- *Type:* string

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeRestoreParameters;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeRestoreParameters">NetappVolumeRestoreParameters</a>

---


### NetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetMinute` <a name="resetMinute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeSnapshotPolicyDailySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---


### NetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinute` <a name="resetMinute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeSnapshotPolicyHourlySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---


### NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```typescript
public resetDaysOfMonth(): void
```

##### `resetHour` <a name="resetHour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetMinute` <a name="resetMinute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```typescript
public readonly daysOfMonthInput: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeSnapshotPolicyMonthlySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### NetappVolumeSnapshotPolicyOutputReference <a name="NetappVolumeSnapshotPolicyOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeSnapshotPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">putHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">putMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">resetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```typescript
public putDailySchedule(value: NetappVolumeSnapshotPolicyDailySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `putHourlySchedule` <a name="putHourlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```typescript
public putHourlySchedule(value: NetappVolumeSnapshotPolicyHourlySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `putMonthlySchedule` <a name="putMonthlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```typescript
public putMonthlySchedule(value: NetappVolumeSnapshotPolicyMonthlySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```typescript
public putWeeklySchedule(value: NetappVolumeSnapshotPolicyWeeklySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHourlySchedule` <a name="resetHourlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```typescript
public resetHourlySchedule(): void
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```typescript
public resetMonthlySchedule(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">hourlyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: NetappVolumeSnapshotPolicyDailyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailyScheduleOutputReference">NetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```typescript
public readonly hourlySchedule: NetappVolumeSnapshotPolicyHourlyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlyScheduleOutputReference">NetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">NetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: NetappVolumeSnapshotPolicyDailySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyDailySchedule">NetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hourlyScheduleInput`<sup>Optional</sup> <a name="hourlyScheduleInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```typescript
public readonly hourlyScheduleInput: NetappVolumeSnapshotPolicyHourlySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyHourlySchedule">NetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```typescript
public readonly monthlyScheduleInput: NetappVolumeSnapshotPolicyMonthlySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyMonthlySchedule">NetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: NetappVolumeSnapshotPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeSnapshotPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicy">NetappVolumeSnapshotPolicy</a>

---


### NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">resetMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetHour` <a name="resetHour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetMinute` <a name="resetMinute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">snapshotsToKeepInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshotsToKeep</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `snapshotsToKeepInput`<sup>Optional</sup> <a name="snapshotsToKeepInput" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```typescript
public readonly snapshotsToKeepInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `snapshotsToKeep`<sup>Required</sup> <a name="snapshotsToKeep" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```typescript
public readonly snapshotsToKeep: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeSnapshotPolicyWeeklySchedule;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeSnapshotPolicyWeeklySchedule">NetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### NetappVolumeTieringPolicyOutputReference <a name="NetappVolumeTieringPolicyOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeTieringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays">resetCoolingThresholdDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetHotTierBypassModeEnabled">resetHotTierBypassModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetTierAction">resetTierAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoolingThresholdDays` <a name="resetCoolingThresholdDays" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```typescript
public resetCoolingThresholdDays(): void
```

##### `resetHotTierBypassModeEnabled` <a name="resetHotTierBypassModeEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetHotTierBypassModeEnabled"></a>

```typescript
public resetHotTierBypassModeEnabled(): void
```

##### `resetTierAction` <a name="resetTierAction" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.resetTierAction"></a>

```typescript
public resetTierAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput">coolingThresholdDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabledInput">hotTierBypassModeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierActionInput">tierActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays">coolingThresholdDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabled">hotTierBypassModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierAction">tierAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coolingThresholdDaysInput`<sup>Optional</sup> <a name="coolingThresholdDaysInput" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```typescript
public readonly coolingThresholdDaysInput: number;
```

- *Type:* number

---

##### `hotTierBypassModeEnabledInput`<sup>Optional</sup> <a name="hotTierBypassModeEnabledInput" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabledInput"></a>

```typescript
public readonly hotTierBypassModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tierActionInput`<sup>Optional</sup> <a name="tierActionInput" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierActionInput"></a>

```typescript
public readonly tierActionInput: string;
```

- *Type:* string

---

##### `coolingThresholdDays`<sup>Required</sup> <a name="coolingThresholdDays" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```typescript
public readonly coolingThresholdDays: number;
```

- *Type:* number

---

##### `hotTierBypassModeEnabled`<sup>Required</sup> <a name="hotTierBypassModeEnabled" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabled"></a>

```typescript
public readonly hotTierBypassModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tierAction`<sup>Required</sup> <a name="tierAction" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.tierAction"></a>

```typescript
public readonly tierAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetappVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTieringPolicy">NetappVolumeTieringPolicy</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { netappVolume } from '@cdktn/provider-google'

new netappVolume.NetappVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetappVolumeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---



