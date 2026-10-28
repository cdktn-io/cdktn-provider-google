# `cloudRunV2Instance` Submodule <a name="`cloudRunV2Instance` Submodule" id="@cdktn/provider-google.cloudRunV2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2Instance <a name="CloudRunV2Instance" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance google_cloud_run_v2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2Instance(scope: Construct, id: string, config: CloudRunV2InstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig">CloudRunV2InstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig">CloudRunV2InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetDefaultUriDisabled">resetDefaultUriDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetEncryptionKeyRevocationAction">resetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetEncryptionKeyShutdownDuration">resetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetInvokerIamDisabled">resetInvokerIamDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainers` <a name="putContainers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putContainers"></a>

```typescript
public putContainers(value: IResolvable | CloudRunV2InstanceContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putContainers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudRunV2InstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts">CloudRunV2InstanceTimeouts</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | CloudRunV2InstanceVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>[]

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetClient` <a name="resetClient" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetClient"></a>

```typescript
public resetClient(): void
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetClientVersion"></a>

```typescript
public resetClientVersion(): void
```

##### `resetDefaultUriDisabled` <a name="resetDefaultUriDisabled" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetDefaultUriDisabled"></a>

```typescript
public resetDefaultUriDisabled(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetEncryptionKeyRevocationAction` <a name="resetEncryptionKeyRevocationAction" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetEncryptionKeyRevocationAction"></a>

```typescript
public resetEncryptionKeyRevocationAction(): void
```

##### `resetEncryptionKeyShutdownDuration` <a name="resetEncryptionKeyShutdownDuration" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetEncryptionKeyShutdownDuration"></a>

```typescript
public resetEncryptionKeyShutdownDuration(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetInvokerIamDisabled` <a name="resetInvokerIamDisabled" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetInvokerIamDisabled"></a>

```typescript
public resetInvokerIamDisabled(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetLaunchStage"></a>

```typescript
public resetLaunchStage(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetRestartPolicy"></a>

```typescript
public resetRestartPolicy(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudRunV2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isConstruct"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

cloudRunV2Instance.CloudRunV2Instance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isTerraformElement"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

cloudRunV2Instance.CloudRunV2Instance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isTerraformResource"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

cloudRunV2Instance.CloudRunV2Instance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.generateConfigForImport"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

cloudRunV2Instance.CloudRunV2Instance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudRunV2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudRunV2Instance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudRunV2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudRunV2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList">CloudRunV2InstanceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList">CloudRunV2InstanceContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.containerStatuses">containerStatuses</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList">CloudRunV2InstanceContainerStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.lastModifier">lastModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.observedGeneration">observedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.satisfiesPzs">satisfiesPzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList">CloudRunV2InstanceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference">CloudRunV2InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList">CloudRunV2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.clientInput">clientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.clientVersionInput">clientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.containersInput">containersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.defaultUriDisabledInput">defaultUriDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyRevocationActionInput">encryptionKeyRevocationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyShutdownDurationInput">encryptionKeyShutdownDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.ingressInput">ingressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.invokerIamDisabledInput">invokerIamDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.launchStageInput">launchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.restartPolicyInput">restartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts">CloudRunV2InstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.volumesInput">volumesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.defaultUriDisabled">defaultUriDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.ingress">ingress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.invokerIamDisabled">invokerIamDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.conditions"></a>

```typescript
public readonly conditions: CloudRunV2InstanceConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList">CloudRunV2InstanceConditionsList</a>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.containers"></a>

```typescript
public readonly containers: CloudRunV2InstanceContainersList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList">CloudRunV2InstanceContainersList</a>

---

##### `containerStatuses`<sup>Required</sup> <a name="containerStatuses" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.containerStatuses"></a>

```typescript
public readonly containerStatuses: CloudRunV2InstanceContainerStatusesList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList">CloudRunV2InstanceContainerStatusesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `lastModifier`<sup>Required</sup> <a name="lastModifier" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.lastModifier"></a>

```typescript
public readonly lastModifier: string;
```

- *Type:* string

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.satisfiesPzs"></a>

```typescript
public readonly satisfiesPzs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terminalCondition"></a>

```typescript
public readonly terminalCondition: CloudRunV2InstanceTerminalConditionList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList">CloudRunV2InstanceTerminalConditionList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunV2InstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference">CloudRunV2InstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.volumes"></a>

```typescript
public readonly volumes: CloudRunV2InstanceVolumesList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList">CloudRunV2InstanceVolumesList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.clientInput"></a>

```typescript
public readonly clientInput: string;
```

- *Type:* string

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.clientVersionInput"></a>

```typescript
public readonly clientVersionInput: string;
```

- *Type:* string

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | CloudRunV2InstanceContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>[]

---

##### `defaultUriDisabledInput`<sup>Optional</sup> <a name="defaultUriDisabledInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.defaultUriDisabledInput"></a>

```typescript
public readonly defaultUriDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `encryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="encryptionKeyRevocationActionInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyRevocationActionInput"></a>

```typescript
public readonly encryptionKeyRevocationActionInput: string;
```

- *Type:* string

---

##### `encryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="encryptionKeyShutdownDurationInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyShutdownDurationInput"></a>

```typescript
public readonly encryptionKeyShutdownDurationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.ingressInput"></a>

```typescript
public readonly ingressInput: string;
```

- *Type:* string

---

##### `invokerIamDisabledInput`<sup>Optional</sup> <a name="invokerIamDisabledInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.invokerIamDisabledInput"></a>

```typescript
public readonly invokerIamDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.launchStageInput"></a>

```typescript
public readonly launchStageInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.restartPolicyInput"></a>

```typescript
public readonly restartPolicyInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudRunV2InstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts">CloudRunV2InstanceTimeouts</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | CloudRunV2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>[]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `defaultUriDisabled`<sup>Required</sup> <a name="defaultUriDisabled" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.defaultUriDisabled"></a>

```typescript
public readonly defaultUriDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `encryptionKeyRevocationAction`<sup>Required</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyRevocationAction"></a>

```typescript
public readonly encryptionKeyRevocationAction: string;
```

- *Type:* string

---

##### `encryptionKeyShutdownDuration`<sup>Required</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.encryptionKeyShutdownDuration"></a>

```typescript
public readonly encryptionKeyShutdownDuration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.ingress"></a>

```typescript
public readonly ingress: string;
```

- *Type:* string

---

##### `invokerIamDisabled`<sup>Required</sup> <a name="invokerIamDisabled" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.invokerIamDisabled"></a>

```typescript
public readonly invokerIamDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2Instance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2InstanceConditions <a name="CloudRunV2InstanceConditions" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditions.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceConditions: cloudRunV2Instance.CloudRunV2InstanceConditions = { ... }
```


### CloudRunV2InstanceConfig <a name="CloudRunV2InstanceConfig" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceConfig: cloudRunV2Instance.CloudRunV2InstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.containers">containers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.name">name</a></code> | <code>string</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.client">client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.clientVersion">clientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.defaultUriDisabled">defaultUriDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>string</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>string</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#id CloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.ingress">ingress</a></code> | <code>string</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.invokerIamDisabled">invokerIamDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.launchStage">launchStage</a></code> | <code>string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#project CloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts">CloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>[]</code> | volumes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.containers"></a>

```typescript
public readonly containers: IResolvable | CloudRunV2InstanceContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#containers CloudRunV2Instance#containers}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#location CloudRunV2Instance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#annotations CloudRunV2Instance#annotations}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#client CloudRunV2Instance#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#client_version CloudRunV2Instance#client_version}

---

##### `defaultUriDisabled`<sup>Optional</sup> <a name="defaultUriDisabled" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.defaultUriDisabled"></a>

```typescript
public readonly defaultUriDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#default_uri_disabled CloudRunV2Instance#default_uri_disabled}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#deletion_policy CloudRunV2Instance#deletion_policy}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#encryption_key CloudRunV2Instance#encryption_key}

---

##### `encryptionKeyRevocationAction`<sup>Optional</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.encryptionKeyRevocationAction"></a>

```typescript
public readonly encryptionKeyRevocationAction: string;
```

- *Type:* string

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#encryption_key_revocation_action CloudRunV2Instance#encryption_key_revocation_action}

---

##### `encryptionKeyShutdownDuration`<sup>Optional</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration"></a>

```typescript
public readonly encryptionKeyShutdownDuration: string;
```

- *Type:* string

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#encryption_key_shutdown_duration CloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#id CloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.ingress"></a>

```typescript
public readonly ingress: string;
```

- *Type:* string

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#ingress CloudRunV2Instance#ingress}

---

##### `invokerIamDisabled`<sup>Optional</sup> <a name="invokerIamDisabled" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.invokerIamDisabled"></a>

```typescript
public readonly invokerIamDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#invoker_iam_disabled CloudRunV2Instance#invoker_iam_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#labels CloudRunV2Instance#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#launch_stage CloudRunV2Instance#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#project CloudRunV2Instance#project}.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#restart_policy CloudRunV2Instance#restart_policy}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Email address of the IAM service account associated with the Instance.

The service account represents the identity of the running Instance, and determines what permissions the instance has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#service_account CloudRunV2Instance#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudRunV2InstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts">CloudRunV2InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#timeouts CloudRunV2Instance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConfig.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | CloudRunV2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#volumes CloudRunV2Instance#volumes}

---

### CloudRunV2InstanceContainers <a name="CloudRunV2InstanceContainers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainers: cloudRunV2Instance.CloudRunV2InstanceContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.image">image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.args">args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.command">command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.env">env</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe">CloudRunV2InstanceContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.name">name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.ports">ports</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources">CloudRunV2InstanceContainersResources</a></code> | resources block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe">CloudRunV2InstanceContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>[]</code> | volume_mounts block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.workingDir">workingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#image CloudRunV2Instance#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#args CloudRunV2Instance#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#command CloudRunV2Instance#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.env"></a>

```typescript
public readonly env: IResolvable | CloudRunV2InstanceContainersEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#env CloudRunV2Instance#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: CloudRunV2InstanceContainersLivenessProbe;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe">CloudRunV2InstanceContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#liveness_probe CloudRunV2Instance#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.ports"></a>

```typescript
public readonly ports: IResolvable | CloudRunV2InstanceContainersPorts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#ports CloudRunV2Instance#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.resources"></a>

```typescript
public readonly resources: CloudRunV2InstanceContainersResources;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources">CloudRunV2InstanceContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#resources CloudRunV2Instance#resources}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.startupProbe"></a>

```typescript
public readonly startupProbe: CloudRunV2InstanceContainersStartupProbe;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe">CloudRunV2InstanceContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#startup_probe CloudRunV2Instance#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | CloudRunV2InstanceContainersVolumeMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#volume_mounts CloudRunV2Instance#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#working_dir CloudRunV2Instance#working_dir}

---

### CloudRunV2InstanceContainersEnv <a name="CloudRunV2InstanceContainersEnv" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersEnv: cloudRunV2Instance.CloudRunV2InstanceContainersEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv.property.value">value</a></code> | <code>string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource">CloudRunV2InstanceContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#value CloudRunV2Instance#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv.property.valueSource"></a>

```typescript
public readonly valueSource: CloudRunV2InstanceContainersEnvValueSource;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource">CloudRunV2InstanceContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#value_source CloudRunV2Instance#value_source}

---

### CloudRunV2InstanceContainersEnvValueSource <a name="CloudRunV2InstanceContainersEnvValueSource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersEnvValueSource: cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#secret_key_ref CloudRunV2Instance#secret_key_ref}

---

### CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersEnvValueSourceSecretKeyRef: cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#secret CloudRunV2Instance#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#version CloudRunV2Instance#version}

---

### CloudRunV2InstanceContainersLivenessProbe <a name="CloudRunV2InstanceContainersLivenessProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersLivenessProbe: cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc">CloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet">CloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Optional. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#failure_threshold CloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.grpc"></a>

```typescript
public readonly grpc: CloudRunV2InstanceContainersLivenessProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc">CloudRunV2InstanceContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#grpc CloudRunV2Instance#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2InstanceContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet">CloudRunV2InstanceContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#http_get CloudRunV2Instance#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#initial_delay_seconds CloudRunV2Instance#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#period_seconds CloudRunV2Instance#period_seconds}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#timeout_seconds CloudRunV2Instance#timeout_seconds}

---

### CloudRunV2InstanceContainersLivenessProbeGrpc <a name="CloudRunV2InstanceContainersLivenessProbeGrpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersLivenessProbeGrpc: cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc.property.port">port</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc.property.service">service</a></code> | <code>string</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#port CloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#service CloudRunV2Instance#service}

---

### CloudRunV2InstanceContainersLivenessProbeHttpGet <a name="CloudRunV2InstanceContainersLivenessProbeHttpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersLivenessProbeHttpGet: cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet.property.port">port</a></code> | <code>number</code> | Optional. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#http_headers CloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#path CloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#port CloudRunV2Instance#port}

---

### CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders <a name="CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders: cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#value CloudRunV2Instance#value}

---

### CloudRunV2InstanceContainersPorts <a name="CloudRunV2InstanceContainersPorts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersPorts: cloudRunV2Instance.CloudRunV2InstanceContainersPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts.property.containerPort">containerPort</a></code> | <code>number</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts.property.name">name</a></code> | <code>string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#container_port CloudRunV2Instance#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

### CloudRunV2InstanceContainersResources <a name="CloudRunV2InstanceContainersResources" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersResources: cloudRunV2Instance.CloudRunV2InstanceContainersResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Only memory and CPU are supported. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only memory and CPU are supported.

Use key 'cpu' for CPU limit, 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', '6', and '8'. Setting 4 CPU requires at least 2Gi of memory, setting 6 or more CPU requires at least 4Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#limits CloudRunV2Instance#limits}

---

### CloudRunV2InstanceContainersStartupProbe <a name="CloudRunV2InstanceContainersStartupProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersStartupProbe: cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc">CloudRunV2InstanceContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet">CloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket">CloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Optional. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#failure_threshold CloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.grpc"></a>

```typescript
public readonly grpc: CloudRunV2InstanceContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc">CloudRunV2InstanceContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#grpc CloudRunV2Instance#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2InstanceContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet">CloudRunV2InstanceContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#http_get CloudRunV2Instance#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#initial_delay_seconds CloudRunV2Instance#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#period_seconds CloudRunV2Instance#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2InstanceContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket">CloudRunV2InstanceContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#tcp_socket CloudRunV2Instance#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#timeout_seconds CloudRunV2Instance#timeout_seconds}

---

### CloudRunV2InstanceContainersStartupProbeGrpc <a name="CloudRunV2InstanceContainersStartupProbeGrpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersStartupProbeGrpc: cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc.property.port">port</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc.property.service">service</a></code> | <code>string</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#port CloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#service CloudRunV2Instance#service}

---

### CloudRunV2InstanceContainersStartupProbeHttpGet <a name="CloudRunV2InstanceContainersStartupProbeHttpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersStartupProbeHttpGet: cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet.property.path">path</a></code> | <code>string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet.property.port">port</a></code> | <code>number</code> | Optional. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#http_headers CloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#path CloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#port CloudRunV2Instance#port}

---

### CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders <a name="CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders: cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#value CloudRunV2Instance#value}

---

### CloudRunV2InstanceContainersStartupProbeTcpSocket <a name="CloudRunV2InstanceContainersStartupProbeTcpSocket" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersStartupProbeTcpSocket: cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>number</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#port CloudRunV2Instance#port}

---

### CloudRunV2InstanceContainerStatuses <a name="CloudRunV2InstanceContainerStatuses" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatuses.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainerStatuses: cloudRunV2Instance.CloudRunV2InstanceContainerStatuses = { ... }
```


### CloudRunV2InstanceContainersVolumeMounts <a name="CloudRunV2InstanceContainersVolumeMounts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceContainersVolumeMounts: cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts.property.name">name</a></code> | <code>string</code> | This must match the Name of a Volume. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts.property.subPath">subPath</a></code> | <code>string</code> | Path within the volume from which the container's volume should be mounted. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#mount_path CloudRunV2Instance#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

##### `subPath`<sup>Optional</sup> <a name="subPath" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

Path within the volume from which the container's volume should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#sub_path CloudRunV2Instance#sub_path}

---

### CloudRunV2InstanceTerminalCondition <a name="CloudRunV2InstanceTerminalCondition" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalCondition.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceTerminalCondition: cloudRunV2Instance.CloudRunV2InstanceTerminalCondition = { ... }
```


### CloudRunV2InstanceTimeouts <a name="CloudRunV2InstanceTimeouts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceTimeouts: cloudRunV2Instance.CloudRunV2InstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#create CloudRunV2Instance#create}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#delete CloudRunV2Instance#delete}. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#update CloudRunV2Instance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#create CloudRunV2Instance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#delete CloudRunV2Instance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#update CloudRunV2Instance#update}.

---

### CloudRunV2InstanceVolumes <a name="CloudRunV2InstanceVolumes" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceVolumes: cloudRunV2Instance.CloudRunV2InstanceVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.name">name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance">CloudRunV2InstanceVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir">CloudRunV2InstanceVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs">CloudRunV2InstanceVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs">CloudRunV2InstanceVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret">CloudRunV2InstanceVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#name CloudRunV2Instance#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: CloudRunV2InstanceVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance">CloudRunV2InstanceVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#cloud_sql_instance CloudRunV2Instance#cloud_sql_instance}

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.emptyDir"></a>

```typescript
public readonly emptyDir: CloudRunV2InstanceVolumesEmptyDir;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir">CloudRunV2InstanceVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#empty_dir CloudRunV2Instance#empty_dir}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.gcs"></a>

```typescript
public readonly gcs: CloudRunV2InstanceVolumesGcs;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs">CloudRunV2InstanceVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#gcs CloudRunV2Instance#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.nfs"></a>

```typescript
public readonly nfs: CloudRunV2InstanceVolumesNfs;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs">CloudRunV2InstanceVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#nfs CloudRunV2Instance#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes.property.secret"></a>

```typescript
public readonly secret: CloudRunV2InstanceVolumesSecret;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret">CloudRunV2InstanceVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#secret CloudRunV2Instance#secret}

---

### CloudRunV2InstanceVolumesCloudSqlInstance <a name="CloudRunV2InstanceVolumesCloudSqlInstance" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceVolumesCloudSqlInstance: cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#instances CloudRunV2Instance#instances}

---

### CloudRunV2InstanceVolumesEmptyDir <a name="CloudRunV2InstanceVolumesEmptyDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceVolumesEmptyDir: cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir.property.medium">medium</a></code> | <code>string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"]. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#medium CloudRunV2Instance#medium}

---

##### `sizeLimit`<sup>Optional</sup> <a name="sizeLimit" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#size_limit CloudRunV2Instance#size_limit}

---

### CloudRunV2InstanceVolumesGcs <a name="CloudRunV2InstanceVolumesGcs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceVolumesGcs: cloudRunV2Instance.CloudRunV2InstanceVolumesGcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs.property.bucket">bucket</a></code> | <code>string</code> | GCS Bucket name. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, mount the GCS bucket as read-only. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#bucket CloudRunV2Instance#bucket}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#mount_options CloudRunV2Instance#mount_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#read_only CloudRunV2Instance#read_only}

---

### CloudRunV2InstanceVolumesNfs <a name="CloudRunV2InstanceVolumesNfs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceVolumesNfs: cloudRunV2Instance.CloudRunV2InstanceVolumesNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs.property.path">path</a></code> | <code>string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs.property.server">server</a></code> | <code>string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, mount the NFS volume as read only. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#path CloudRunV2Instance#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#server CloudRunV2Instance#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#read_only CloudRunV2Instance#read_only}

---

### CloudRunV2InstanceVolumesSecret <a name="CloudRunV2InstanceVolumesSecret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceVolumesSecret: cloudRunV2Instance.CloudRunV2InstanceVolumesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret.property.items">items</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>[]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#secret CloudRunV2Instance#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#default_mode CloudRunV2Instance#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret.property.items"></a>

```typescript
public readonly items: IResolvable | CloudRunV2InstanceVolumesSecretItems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#items CloudRunV2Instance#items}

---

### CloudRunV2InstanceVolumesSecretItems <a name="CloudRunV2InstanceVolumesSecretItems" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

const cloudRunV2InstanceVolumesSecretItems: cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems.property.path">path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems.property.mode">mode</a></code> | <code>number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#path CloudRunV2Instance#path}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#mode CloudRunV2Instance#mode}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/cloud_run_v2_instance#version CloudRunV2Instance#version}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2InstanceConditionsList <a name="CloudRunV2InstanceConditionsList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2InstanceConditionsOutputReference <a name="CloudRunV2InstanceConditionsOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.instanceReason">instanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditions">CloudRunV2InstanceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceReason`<sup>Required</sup> <a name="instanceReason" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.instanceReason"></a>

```typescript
public readonly instanceReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceConditions;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceConditions">CloudRunV2InstanceConditions</a>

---


### CloudRunV2InstanceContainersEnvList <a name="CloudRunV2InstanceContainersEnvList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>[]

---


### CloudRunV2InstanceContainersEnvOutputReference <a name="CloudRunV2InstanceContainersEnvOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.putValueSource"></a>

```typescript
public putValueSource(value: CloudRunV2InstanceContainersEnvValueSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource">CloudRunV2InstanceContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.resetValueSource"></a>

```typescript
public resetValueSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference">CloudRunV2InstanceContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource">CloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: CloudRunV2InstanceContainersEnvValueSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference">CloudRunV2InstanceContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput"></a>

```typescript
public readonly valueSourceInput: CloudRunV2InstanceContainersEnvValueSource;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource">CloudRunV2InstanceContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersEnv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>

---


### CloudRunV2InstanceContainersEnvValueSourceOutputReference <a name="CloudRunV2InstanceContainersEnvValueSourceOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```typescript
public putSecretKeyRef(value: CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```typescript
public resetSecretKeyRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource">CloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```typescript
public readonly secretKeyRefInput: CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersEnvValueSource;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSource">CloudRunV2InstanceContainersEnvValueSource</a>

---


### CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">CloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2InstanceContainersList <a name="CloudRunV2InstanceContainersList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>[]

---


### CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference <a name="CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc">CloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersLivenessProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc">CloudRunV2InstanceContainersLivenessProbeGrpc</a>

---


### CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList <a name="CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---


### CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>

---


### CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference <a name="CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet">CloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet">CloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---


### CloudRunV2InstanceContainersLivenessProbeOutputReference <a name="CloudRunV2InstanceContainersLivenessProbeOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc"></a>

```typescript
public putGrpc(value: CloudRunV2InstanceContainersLivenessProbeGrpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc">CloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: CloudRunV2InstanceContainersLivenessProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet">CloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc"></a>

```typescript
public resetGrpc(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc">CloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet">CloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe">CloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc"></a>

```typescript
public readonly grpc: CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">CloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">CloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput"></a>

```typescript
public readonly grpcInput: CloudRunV2InstanceContainersLivenessProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeGrpc">CloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: CloudRunV2InstanceContainersLivenessProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeHttpGet">CloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersLivenessProbe;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe">CloudRunV2InstanceContainersLivenessProbe</a>

---


### CloudRunV2InstanceContainersOutputReference <a name="CloudRunV2InstanceContainersOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | CloudRunV2InstanceContainersEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>[]

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putLivenessProbe"></a>

```typescript
public putLivenessProbe(value: CloudRunV2InstanceContainersLivenessProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe">CloudRunV2InstanceContainersLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | CloudRunV2InstanceContainersPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>[]

---

##### `putResources` <a name="putResources" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putResources"></a>

```typescript
public putResources(value: CloudRunV2InstanceContainersResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources">CloudRunV2InstanceContainersResources</a>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putStartupProbe"></a>

```typescript
public putStartupProbe(value: CloudRunV2InstanceContainersStartupProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe">CloudRunV2InstanceContainersStartupProbe</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | CloudRunV2InstanceContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetLivenessProbe"></a>

```typescript
public resetLivenessProbe(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetStartupProbe"></a>

```typescript
public resetStartupProbe(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList">CloudRunV2InstanceContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference">CloudRunV2InstanceContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList">CloudRunV2InstanceContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference">CloudRunV2InstanceContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference">CloudRunV2InstanceContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList">CloudRunV2InstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.envInput">envInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe">CloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.portsInput">portsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources">CloudRunV2InstanceContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe">CloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.env"></a>

```typescript
public readonly env: CloudRunV2InstanceContainersEnvList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnvList">CloudRunV2InstanceContainersEnvList</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.livenessProbe"></a>

```typescript
public readonly livenessProbe: CloudRunV2InstanceContainersLivenessProbeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbeOutputReference">CloudRunV2InstanceContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.ports"></a>

```typescript
public readonly ports: CloudRunV2InstanceContainersPortsList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList">CloudRunV2InstanceContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: CloudRunV2InstanceContainersResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference">CloudRunV2InstanceContainersResourcesOutputReference</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: CloudRunV2InstanceContainersStartupProbeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference">CloudRunV2InstanceContainersStartupProbeOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: CloudRunV2InstanceContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList">CloudRunV2InstanceContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | CloudRunV2InstanceContainersEnv[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersEnv">CloudRunV2InstanceContainersEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.livenessProbeInput"></a>

```typescript
public readonly livenessProbeInput: CloudRunV2InstanceContainersLivenessProbe;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersLivenessProbe">CloudRunV2InstanceContainersLivenessProbe</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | CloudRunV2InstanceContainersPorts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: CloudRunV2InstanceContainersResources;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources">CloudRunV2InstanceContainersResources</a>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.startupProbeInput"></a>

```typescript
public readonly startupProbeInput: CloudRunV2InstanceContainersStartupProbe;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe">CloudRunV2InstanceContainersStartupProbe</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | CloudRunV2InstanceContainersVolumeMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>[]

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainers">CloudRunV2InstanceContainers</a>

---


### CloudRunV2InstanceContainersPortsList <a name="CloudRunV2InstanceContainersPortsList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersPorts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>[]

---


### CloudRunV2InstanceContainersPortsOutputReference <a name="CloudRunV2InstanceContainersPortsOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersPorts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersPorts">CloudRunV2InstanceContainersPorts</a>

---


### CloudRunV2InstanceContainersResourcesOutputReference <a name="CloudRunV2InstanceContainersResourcesOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources">CloudRunV2InstanceContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersResources;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersResources">CloudRunV2InstanceContainersResources</a>

---


### CloudRunV2InstanceContainersStartupProbeGrpcOutputReference <a name="CloudRunV2InstanceContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc">CloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc">CloudRunV2InstanceContainersStartupProbeGrpc</a>

---


### CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList <a name="CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---


### CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>

---


### CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference <a name="CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet">CloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">CloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet">CloudRunV2InstanceContainersStartupProbeHttpGet</a>

---


### CloudRunV2InstanceContainersStartupProbeOutputReference <a name="CloudRunV2InstanceContainersStartupProbeOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc"></a>

```typescript
public putGrpc(value: CloudRunV2InstanceContainersStartupProbeGrpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc">CloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: CloudRunV2InstanceContainersStartupProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet">CloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket"></a>

```typescript
public putTcpSocket(value: CloudRunV2InstanceContainersStartupProbeTcpSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket">CloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc"></a>

```typescript
public resetGrpc(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket"></a>

```typescript
public resetTcpSocket(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference">CloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc">CloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet">CloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket">CloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe">CloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc"></a>

```typescript
public readonly grpc: CloudRunV2InstanceContainersStartupProbeGrpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpcOutputReference">CloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">CloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput"></a>

```typescript
public readonly grpcInput: CloudRunV2InstanceContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeGrpc">CloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: CloudRunV2InstanceContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeHttpGet">CloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```typescript
public readonly tcpSocketInput: CloudRunV2InstanceContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket">CloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersStartupProbe;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbe">CloudRunV2InstanceContainersStartupProbe</a>

---


### CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference <a name="CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket">CloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersStartupProbeTcpSocket">CloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---


### CloudRunV2InstanceContainerStatusesList <a name="CloudRunV2InstanceContainerStatusesList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceContainerStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2InstanceContainerStatusesOutputReference <a name="CloudRunV2InstanceContainerStatusesOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatuses">CloudRunV2InstanceContainerStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatusesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceContainerStatuses;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainerStatuses">CloudRunV2InstanceContainerStatuses</a>

---


### CloudRunV2InstanceContainersVolumeMountsList <a name="CloudRunV2InstanceContainersVolumeMountsList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersVolumeMounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>[]

---


### CloudRunV2InstanceContainersVolumeMountsOutputReference <a name="CloudRunV2InstanceContainersVolumeMountsOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath">resetSubPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubPath` <a name="resetSubPath" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```typescript
public resetSubPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput">subPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subPathInput`<sup>Optional</sup> <a name="subPathInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```typescript
public readonly subPathInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceContainersVolumeMounts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceContainersVolumeMounts">CloudRunV2InstanceContainersVolumeMounts</a>

---


### CloudRunV2InstanceTerminalConditionList <a name="CloudRunV2InstanceTerminalConditionList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudRunV2InstanceTerminalConditionOutputReference <a name="CloudRunV2InstanceTerminalConditionOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason">instanceReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalCondition">CloudRunV2InstanceTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceReason`<sup>Required</sup> <a name="instanceReason" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason"></a>

```typescript
public readonly instanceReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceTerminalCondition;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTerminalCondition">CloudRunV2InstanceTerminalCondition</a>

---


### CloudRunV2InstanceTimeoutsOutputReference <a name="CloudRunV2InstanceTimeoutsOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts">CloudRunV2InstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceTimeouts">CloudRunV2InstanceTimeouts</a>

---


### CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance">CloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance">CloudRunV2InstanceVolumesCloudSqlInstance</a>

---


### CloudRunV2InstanceVolumesEmptyDirOutputReference <a name="CloudRunV2InstanceVolumesEmptyDirOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium">resetMedium</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit">resetSizeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMedium` <a name="resetMedium" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium"></a>

```typescript
public resetMedium(): void
```

##### `resetSizeLimit` <a name="resetSizeLimit" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```typescript
public resetSizeLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput">mediumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput">sizeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir">CloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediumInput`<sup>Optional</sup> <a name="mediumInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput"></a>

```typescript
public readonly mediumInput: string;
```

- *Type:* string

---

##### `sizeLimitInput`<sup>Optional</sup> <a name="sizeLimitInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```typescript
public readonly sizeLimitInput: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceVolumesEmptyDir;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir">CloudRunV2InstanceVolumesEmptyDir</a>

---


### CloudRunV2InstanceVolumesGcsOutputReference <a name="CloudRunV2InstanceVolumesGcsOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs">CloudRunV2InstanceVolumesGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceVolumesGcs;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs">CloudRunV2InstanceVolumesGcs</a>

---


### CloudRunV2InstanceVolumesList <a name="CloudRunV2InstanceVolumesList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>[]

---


### CloudRunV2InstanceVolumesNfsOutputReference <a name="CloudRunV2InstanceVolumesNfsOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs">CloudRunV2InstanceVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceVolumesNfs;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs">CloudRunV2InstanceVolumesNfs</a>

---


### CloudRunV2InstanceVolumesOutputReference <a name="CloudRunV2InstanceVolumesOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putEmptyDir">putEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance"></a>

```typescript
public putCloudSqlInstance(value: CloudRunV2InstanceVolumesCloudSqlInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance">CloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `putEmptyDir` <a name="putEmptyDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putEmptyDir"></a>

```typescript
public putEmptyDir(value: CloudRunV2InstanceVolumesEmptyDir): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir">CloudRunV2InstanceVolumesEmptyDir</a>

---

##### `putGcs` <a name="putGcs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putGcs"></a>

```typescript
public putGcs(value: CloudRunV2InstanceVolumesGcs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs">CloudRunV2InstanceVolumesGcs</a>

---

##### `putNfs` <a name="putNfs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putNfs"></a>

```typescript
public putNfs(value: CloudRunV2InstanceVolumesNfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs">CloudRunV2InstanceVolumesNfs</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putSecret"></a>

```typescript
public putSecret(value: CloudRunV2InstanceVolumesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret">CloudRunV2InstanceVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance"></a>

```typescript
public resetCloudSqlInstance(): void
```

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetEmptyDir"></a>

```typescript
public resetEmptyDir(): void
```

##### `resetGcs` <a name="resetGcs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetGcs"></a>

```typescript
public resetGcs(): void
```

##### `resetNfs` <a name="resetNfs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference">CloudRunV2InstanceVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference">CloudRunV2InstanceVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference">CloudRunV2InstanceVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference">CloudRunV2InstanceVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance">CloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir">CloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs">CloudRunV2InstanceVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs">CloudRunV2InstanceVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret">CloudRunV2InstanceVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">CloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.emptyDir"></a>

```typescript
public readonly emptyDir: CloudRunV2InstanceVolumesEmptyDirOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDirOutputReference">CloudRunV2InstanceVolumesEmptyDirOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.gcs"></a>

```typescript
public readonly gcs: CloudRunV2InstanceVolumesGcsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcsOutputReference">CloudRunV2InstanceVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.nfs"></a>

```typescript
public readonly nfs: CloudRunV2InstanceVolumesNfsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfsOutputReference">CloudRunV2InstanceVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: CloudRunV2InstanceVolumesSecretOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference">CloudRunV2InstanceVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```typescript
public readonly cloudSqlInstanceInput: CloudRunV2InstanceVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesCloudSqlInstance">CloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.emptyDirInput"></a>

```typescript
public readonly emptyDirInput: CloudRunV2InstanceVolumesEmptyDir;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesEmptyDir">CloudRunV2InstanceVolumesEmptyDir</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.gcsInput"></a>

```typescript
public readonly gcsInput: CloudRunV2InstanceVolumesGcs;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesGcs">CloudRunV2InstanceVolumesGcs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: CloudRunV2InstanceVolumesNfs;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesNfs">CloudRunV2InstanceVolumesNfs</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: CloudRunV2InstanceVolumesSecret;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret">CloudRunV2InstanceVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceVolumes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumes">CloudRunV2InstanceVolumes</a>

---


### CloudRunV2InstanceVolumesSecretItemsList <a name="CloudRunV2InstanceVolumesSecretItemsList" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.get"></a>

```typescript
public get(index: number): CloudRunV2InstanceVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceVolumesSecretItems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>[]

---


### CloudRunV2InstanceVolumesSecretItemsOutputReference <a name="CloudRunV2InstanceVolumesSecretItemsOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudRunV2InstanceVolumesSecretItems;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>

---


### CloudRunV2InstanceVolumesSecretOutputReference <a name="CloudRunV2InstanceVolumesSecretOutputReference" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.Initializer"></a>

```typescript
import { cloudRunV2Instance } from '@cdktn/provider-google'

new cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | CloudRunV2InstanceVolumesSecretItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>[]

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode"></a>

```typescript
public resetDefaultMode(): void
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList">CloudRunV2InstanceVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret">CloudRunV2InstanceVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.items"></a>

```typescript
public readonly items: CloudRunV2InstanceVolumesSecretItemsList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItemsList">CloudRunV2InstanceVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput"></a>

```typescript
public readonly defaultModeInput: number;
```

- *Type:* number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | CloudRunV2InstanceVolumesSecretItems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretItems">CloudRunV2InstanceVolumesSecretItems</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudRunV2InstanceVolumesSecret;
```

- *Type:* <a href="#@cdktn/provider-google.cloudRunV2Instance.CloudRunV2InstanceVolumesSecret">CloudRunV2InstanceVolumesSecret</a>

---



