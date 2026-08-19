# `gkeHubRolloutSequence` Submodule <a name="`gkeHubRolloutSequence` Submodule" id="@cdktn/provider-google.gkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubRolloutSequence <a name="GkeHubRolloutSequence" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequence(scope: Construct, id: string, config: GkeHubRolloutSequenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig">GkeHubRolloutSequenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig">GkeHubRolloutSequenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig">putAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector">putIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig">resetAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector">resetIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinControlPlaneVersion">resetMinControlPlaneVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinNodeVersion">resetMinNodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoUpgradeConfig` <a name="putAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```typescript
public putAutoUpgradeConfig(value: GkeHubRolloutSequenceAutoUpgradeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putAutoUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `putIgnoredClustersSelector` <a name="putIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```typescript
public putIgnoredClustersSelector(value: GkeHubRolloutSequenceIgnoredClustersSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putIgnoredClustersSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `putStages` <a name="putStages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages"></a>

```typescript
public putStages(value: IResolvable | GkeHubRolloutSequenceStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeHubRolloutSequenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---

##### `resetAutoUpgradeConfig` <a name="resetAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```typescript
public resetAutoUpgradeConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoredClustersSelector` <a name="resetIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```typescript
public resetIgnoredClustersSelector(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMinControlPlaneVersion` <a name="resetMinControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinControlPlaneVersion"></a>

```typescript
public resetMinControlPlaneVersion(): void
```

##### `resetMinNodeVersion` <a name="resetMinNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetMinNodeVersion"></a>

```typescript
public resetMinNodeVersion(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeHubRolloutSequence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.operationalState">operationalState</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList">GkeHubRolloutSequenceOperationalStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetControlPlaneVersion">targetControlPlaneVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetNodeVersion">targetNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput">autoUpgradeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput">ignoredClustersSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersionInput">minControlPlaneVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersionInput">minNodeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput">rolloutSequenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput">stagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersion">minControlPlaneVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoUpgradeConfig`<sup>Required</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```typescript
public readonly autoUpgradeConfig: GkeHubRolloutSequenceAutoUpgradeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `ignoredClustersSelector`<sup>Required</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```typescript
public readonly ignoredClustersSelector: GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.operationalState"></a>

```typescript
public readonly operationalState: GkeHubRolloutSequenceOperationalStateList;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList">GkeHubRolloutSequenceOperationalStateList</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stages"></a>

```typescript
public readonly stages: GkeHubRolloutSequenceStagesList;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList">GkeHubRolloutSequenceStagesList</a>

---

##### `targetControlPlaneVersion`<sup>Required</sup> <a name="targetControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetControlPlaneVersion"></a>

```typescript
public readonly targetControlPlaneVersion: string;
```

- *Type:* string

---

##### `targetNodeVersion`<sup>Required</sup> <a name="targetNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.targetNodeVersion"></a>

```typescript
public readonly targetNodeVersion: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubRolloutSequenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference">GkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoUpgradeConfigInput`<sup>Optional</sup> <a name="autoUpgradeConfigInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```typescript
public readonly autoUpgradeConfigInput: GkeHubRolloutSequenceAutoUpgradeConfig;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoredClustersSelectorInput`<sup>Optional</sup> <a name="ignoredClustersSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```typescript
public readonly ignoredClustersSelectorInput: GkeHubRolloutSequenceIgnoredClustersSelector;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minControlPlaneVersionInput`<sup>Optional</sup> <a name="minControlPlaneVersionInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersionInput"></a>

```typescript
public readonly minControlPlaneVersionInput: string;
```

- *Type:* string

---

##### `minNodeVersionInput`<sup>Optional</sup> <a name="minNodeVersionInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersionInput"></a>

```typescript
public readonly minNodeVersionInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rolloutSequenceIdInput`<sup>Optional</sup> <a name="rolloutSequenceIdInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```typescript
public readonly rolloutSequenceIdInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | GkeHubRolloutSequenceStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeHubRolloutSequenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minControlPlaneVersion`<sup>Required</sup> <a name="minControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minControlPlaneVersion"></a>

```typescript
public readonly minControlPlaneVersion: string;
```

- *Type:* string

---

##### `minNodeVersion`<sup>Required</sup> <a name="minNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.rolloutSequenceId"></a>

```typescript
public readonly rolloutSequenceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequence.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubRolloutSequenceAutoUpgradeConfig <a name="GkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceAutoUpgradeConfig: gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `rolloutCreationScope`<sup>Optional</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```typescript
public readonly rolloutCreationScope: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#rollout_creation_scope GkeHubRolloutSequence#rollout_creation_scope}

---

### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope: gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">upgradeTypes</a></code> | <code>string[]</code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `upgradeTypes`<sup>Optional</sup> <a name="upgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```typescript
public readonly upgradeTypes: string[];
```

- *Type:* string[]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#upgrade_types GkeHubRolloutSequence#upgrade_types}

---

### GkeHubRolloutSequenceConfig <a name="GkeHubRolloutSequenceConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceConfig: gkeHubRolloutSequence.GkeHubRolloutSequenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>string</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]</code> | stages block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName">displayName</a></code> | <code>string</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minControlPlaneVersion">minControlPlaneVersion</a></code> | <code>string</code> | Minimum control plane version that the clusters in the sequence should be upgraded to. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node version that the clusters in the sequence should be upgraded to. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```typescript
public readonly rolloutSequenceId: string;
```

- *Type:* string

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#rollout_sequence_id GkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.stages"></a>

```typescript
public readonly stages: IResolvable | GkeHubRolloutSequenceStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#stages GkeHubRolloutSequence#stages}

---

##### `autoUpgradeConfig`<sup>Optional</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```typescript
public readonly autoUpgradeConfig: GkeHubRolloutSequenceAutoUpgradeConfig;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#auto_upgrade_config GkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#deletion_policy GkeHubRolloutSequence#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#display_name GkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#id GkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredClustersSelector`<sup>Optional</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```typescript
public readonly ignoredClustersSelector: GkeHubRolloutSequenceIgnoredClustersSelector;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#ignored_clusters_selector GkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#labels GkeHubRolloutSequence#labels}

---

##### `minControlPlaneVersion`<sup>Optional</sup> <a name="minControlPlaneVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minControlPlaneVersion"></a>

```typescript
public readonly minControlPlaneVersion: string;
```

- *Type:* string

Minimum control plane version that the clusters in the sequence should be upgraded to.

Setting this field will cause the creation of a rollout to the specified version.
Any rollout of the same type already running on the first stage of the sequence will be cancelled to allow for the creation of the new rollout.
Should be a valid [semantic version](https://semver.org/).
Version aliases are supported, as described in the [cluster version docs](https://docs.cloud.google.com/kubernetes-engine/versioning#specifying_cluster_version).
Note that the 'latest' and '-' aliases are not supported for this field.
Supported formats: '1.X', '1.X.Y', '1.X.Y-gke.N'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#min_control_plane_version GkeHubRolloutSequence#min_control_plane_version}

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node version that the clusters in the sequence should be upgraded to.

Setting this field will cause the creation of a rollout to the specified version.
Any rollout of the same type already running on the first stage of the sequence will be cancelled to allow for the creation of the new rollout.
Should be a valid [semantic version](https://semver.org/).
Version aliases are supported, as described in the [cluster version docs](https://docs.cloud.google.com/kubernetes-engine/versioning#specifying_cluster_version).
Note that the 'latest' and '-' aliases are not supported for this field.
Supported formats: '1.X', '1.X.Y', '1.X.Y-gke.N'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#min_node_version GkeHubRolloutSequence#min_node_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#project GkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubRolloutSequenceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#timeouts GkeHubRolloutSequence#timeouts}

---

### GkeHubRolloutSequenceIgnoredClustersSelector <a name="GkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceIgnoredClustersSelector: gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">labelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceOperationalState <a name="GkeHubRolloutSequenceOperationalState" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceOperationalState: gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState = { ... }
```


### GkeHubRolloutSequenceStages <a name="GkeHubRolloutSequenceStages" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceStages: gkeHubRolloutSequence.GkeHubRolloutSequenceStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects">fleetProjects</a></code> | <code>string[]</code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration">soakDuration</a></code> | <code>string</code> | Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days. |

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.fleetProjects"></a>

```typescript
public readonly fleetProjects: string[];
```

- *Type:* string[]

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#fleet_projects GkeHubRolloutSequence#fleet_projects}

---

##### `clusterSelector`<sup>Optional</sup> <a name="clusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.clusterSelector"></a>

```typescript
public readonly clusterSelector: GkeHubRolloutSequenceStagesClusterSelector;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#cluster_selector GkeHubRolloutSequence#cluster_selector}

---

##### `soakDuration`<sup>Optional</sup> <a name="soakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages.property.soakDuration"></a>

```typescript
public readonly soakDuration: string;
```

- *Type:* string

Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#soak_duration GkeHubRolloutSequence#soak_duration}

---

### GkeHubRolloutSequenceStagesClusterSelector <a name="GkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceStagesClusterSelector: gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">labelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#label_selector GkeHubRolloutSequence#label_selector}

---

### GkeHubRolloutSequenceTimeouts <a name="GkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

const gkeHubRolloutSequenceTimeouts: gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#create GkeHubRolloutSequence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#delete GkeHubRolloutSequence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/gke_hub_rollout_sequence#update GkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">putRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">resetRolloutCreationScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRolloutCreationScope` <a name="putRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```typescript
public putRolloutCreationScope(value: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `resetRolloutCreationScope` <a name="resetRolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```typescript
public resetRolloutCreationScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">rolloutCreationScopeInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rolloutCreationScope`<sup>Required</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```typescript
public readonly rolloutCreationScope: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `rolloutCreationScopeInput`<sup>Optional</sup> <a name="rolloutCreationScopeInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```typescript
public readonly rolloutCreationScopeInput: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubRolloutSequenceAutoUpgradeConfig;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfig">GkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">resetUpgradeTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpgradeTypes` <a name="resetUpgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```typescript
public resetUpgradeTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">upgradeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">upgradeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `upgradeTypesInput`<sup>Optional</sup> <a name="upgradeTypesInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```typescript
public readonly upgradeTypesInput: string[];
```

- *Type:* string[]

---

##### `upgradeTypes`<sup>Required</sup> <a name="upgradeTypes" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```typescript
public readonly upgradeTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubRolloutSequenceIgnoredClustersSelector;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceIgnoredClustersSelector">GkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GkeHubRolloutSequenceOperationalStateList <a name="GkeHubRolloutSequenceOperationalStateList" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.get"></a>

```typescript
public get(index: number): GkeHubRolloutSequenceOperationalStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeHubRolloutSequenceOperationalStateOutputReference <a name="GkeHubRolloutSequenceOperationalStateOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState">GkeHubRolloutSequenceOperationalState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubRolloutSequenceOperationalState;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceOperationalState">GkeHubRolloutSequenceOperationalState</a>

---


### GkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubRolloutSequenceStagesClusterSelector;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---


### GkeHubRolloutSequenceStagesList <a name="GkeHubRolloutSequenceStagesList" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get"></a>

```typescript
public get(index: number): GkeHubRolloutSequenceStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubRolloutSequenceStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>[]

---


### GkeHubRolloutSequenceStagesOutputReference <a name="GkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector">putClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">resetClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">resetSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterSelector` <a name="putClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```typescript
public putClusterSelector(value: GkeHubRolloutSequenceStagesClusterSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `resetClusterSelector` <a name="resetClusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```typescript
public resetClusterSelector(): void
```

##### `resetSoakDuration` <a name="resetSoakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```typescript
public resetSoakDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">clusterSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">fleetProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">soakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">fleetProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration">soakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterSelector`<sup>Required</sup> <a name="clusterSelector" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```typescript
public readonly clusterSelector: GkeHubRolloutSequenceStagesClusterSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelectorOutputReference">GkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `clusterSelectorInput`<sup>Optional</sup> <a name="clusterSelectorInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```typescript
public readonly clusterSelectorInput: GkeHubRolloutSequenceStagesClusterSelector;
```

- *Type:* <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesClusterSelector">GkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `fleetProjectsInput`<sup>Optional</sup> <a name="fleetProjectsInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```typescript
public readonly fleetProjectsInput: string[];
```

- *Type:* string[]

---

##### `soakDurationInput`<sup>Optional</sup> <a name="soakDurationInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```typescript
public readonly soakDurationInput: string;
```

- *Type:* string

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```typescript
public readonly fleetProjects: string[];
```

- *Type:* string[]

---

##### `soakDuration`<sup>Required</sup> <a name="soakDuration" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```typescript
public readonly soakDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubRolloutSequenceStages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceStages">GkeHubRolloutSequenceStages</a>

---


### GkeHubRolloutSequenceTimeoutsOutputReference <a name="GkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeHubRolloutSequence } from '@cdktn/provider-google'

new gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubRolloutSequenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.gkeHubRolloutSequence.GkeHubRolloutSequenceTimeouts">GkeHubRolloutSequenceTimeouts</a>

---



