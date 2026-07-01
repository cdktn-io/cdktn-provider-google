# `clouddeployTarget` Submodule <a name="`clouddeployTarget` Submodule" id="@cdktn/provider-google.clouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployTarget <a name="ClouddeployTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTarget(scope: Construct, id: string, config: ClouddeployTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig">ClouddeployTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig">ClouddeployTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster">putAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putAssociatedEntities">putAssociatedEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget">putCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs">putExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putGke">putGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget">putMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster">resetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetAssociatedEntities">resetAssociatedEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetCustomTarget">resetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetDeployParameters">resetDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs">resetExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetGke">resetGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetMultiTarget">resetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval">resetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnthosCluster` <a name="putAnthosCluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster"></a>

```typescript
public putAnthosCluster(value: ClouddeployTargetAnthosCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---

##### `putAssociatedEntities` <a name="putAssociatedEntities" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putAssociatedEntities"></a>

```typescript
public putAssociatedEntities(value: IResolvable | ClouddeployTargetAssociatedEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putAssociatedEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>[]

---

##### `putCustomTarget` <a name="putCustomTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget"></a>

```typescript
public putCustomTarget(value: ClouddeployTargetCustomTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putCustomTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---

##### `putExecutionConfigs` <a name="putExecutionConfigs" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs"></a>

```typescript
public putExecutionConfigs(value: IResolvable | ClouddeployTargetExecutionConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>[]

---

##### `putGke` <a name="putGke" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putGke"></a>

```typescript
public putGke(value: ClouddeployTargetGke): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---

##### `putMultiTarget` <a name="putMultiTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget"></a>

```typescript
public putMultiTarget(value: ClouddeployTargetMultiTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putMultiTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---

##### `putRun` <a name="putRun" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putRun"></a>

```typescript
public putRun(value: ClouddeployTargetRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts"></a>

```typescript
public putTimeouts(value: ClouddeployTargetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAnthosCluster` <a name="resetAnthosCluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster"></a>

```typescript
public resetAnthosCluster(): void
```

##### `resetAssociatedEntities` <a name="resetAssociatedEntities" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetAssociatedEntities"></a>

```typescript
public resetAssociatedEntities(): void
```

##### `resetCustomTarget` <a name="resetCustomTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetCustomTarget"></a>

```typescript
public resetCustomTarget(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeployParameters` <a name="resetDeployParameters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetDeployParameters"></a>

```typescript
public resetDeployParameters(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionConfigs` <a name="resetExecutionConfigs" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs"></a>

```typescript
public resetExecutionConfigs(): void
```

##### `resetGke` <a name="resetGke" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetGke"></a>

```typescript
public resetGke(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMultiTarget` <a name="resetMultiTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetMultiTarget"></a>

```typescript
public resetMultiTarget(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequireApproval` <a name="resetRequireApproval" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval"></a>

```typescript
public resetRequireApproval(): void
```

##### `resetRun` <a name="resetRun" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetRun"></a>

```typescript
public resetRun(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ClouddeployTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

clouddeployTarget.ClouddeployTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

clouddeployTarget.ClouddeployTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

clouddeployTarget.ClouddeployTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

clouddeployTarget.ClouddeployTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ClouddeployTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ClouddeployTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntities">associatedEntities</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList">ClouddeployTargetAssociatedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.customTarget">customTarget</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference">ClouddeployTargetCustomTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs">executionConfigs</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.gke">gke</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference">ClouddeployTargetMultiTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.run">run</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput">anthosClusterInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntitiesInput">associatedEntitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.customTargetInput">customTargetInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParametersInput">deployParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput">executionConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput">gkeInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTargetInput">multiTargetInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput">requireApprovalInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput">runInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParameters">deployParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anthosCluster`<sup>Required</sup> <a name="anthosCluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster"></a>

```typescript
public readonly anthosCluster: ClouddeployTargetAnthosClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a>

---

##### `associatedEntities`<sup>Required</sup> <a name="associatedEntities" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntities"></a>

```typescript
public readonly associatedEntities: ClouddeployTargetAssociatedEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList">ClouddeployTargetAssociatedEntitiesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customTarget`<sup>Required</sup> <a name="customTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.customTarget"></a>

```typescript
public readonly customTarget: ClouddeployTargetCustomTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference">ClouddeployTargetCustomTargetOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `executionConfigs`<sup>Required</sup> <a name="executionConfigs" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs"></a>

```typescript
public readonly executionConfigs: ClouddeployTargetExecutionConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.gke"></a>

```typescript
public readonly gke: ClouddeployTargetGkeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a>

---

##### `multiTarget`<sup>Required</sup> <a name="multiTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTarget"></a>

```typescript
public readonly multiTarget: ClouddeployTargetMultiTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference">ClouddeployTargetMultiTargetOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.run"></a>

```typescript
public readonly run: ClouddeployTargetRunOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployTargetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anthosClusterInput`<sup>Optional</sup> <a name="anthosClusterInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput"></a>

```typescript
public readonly anthosClusterInput: ClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---

##### `associatedEntitiesInput`<sup>Optional</sup> <a name="associatedEntitiesInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.associatedEntitiesInput"></a>

```typescript
public readonly associatedEntitiesInput: IResolvable | ClouddeployTargetAssociatedEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>[]

---

##### `customTargetInput`<sup>Optional</sup> <a name="customTargetInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.customTargetInput"></a>

```typescript
public readonly customTargetInput: ClouddeployTargetCustomTarget;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deployParametersInput`<sup>Optional</sup> <a name="deployParametersInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParametersInput"></a>

```typescript
public readonly deployParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionConfigsInput`<sup>Optional</sup> <a name="executionConfigsInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput"></a>

```typescript
public readonly executionConfigsInput: IResolvable | ClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>[]

---

##### `gkeInput`<sup>Optional</sup> <a name="gkeInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput"></a>

```typescript
public readonly gkeInput: ClouddeployTargetGke;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multiTargetInput`<sup>Optional</sup> <a name="multiTargetInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.multiTargetInput"></a>

```typescript
public readonly multiTargetInput: ClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requireApprovalInput`<sup>Optional</sup> <a name="requireApprovalInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput"></a>

```typescript
public readonly requireApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput"></a>

```typescript
public readonly runInput: ClouddeployTargetRun;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ClouddeployTargetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deployParameters`<sup>Required</sup> <a name="deployParameters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.deployParameters"></a>

```typescript
public readonly deployParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requireApproval`<sup>Required</sup> <a name="requireApproval" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployTargetAnthosCluster <a name="ClouddeployTargetAnthosCluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetAnthosCluster: clouddeployTarget.ClouddeployTargetAnthosCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership">membership</a></code> | <code>string</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

### ClouddeployTargetAssociatedEntities <a name="ClouddeployTargetAssociatedEntities" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetAssociatedEntities: clouddeployTarget.ClouddeployTargetAssociatedEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.entityId">entityId</a></code> | <code>string</code> | The name for the key in the map for which this object is mapped to in the API. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.anthosClusters">anthosClusters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]</code> | anthos_clusters block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.gkeClusters">gkeClusters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>[]</code> | gke_clusters block. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The name for the key in the map for which this object is mapped to in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#entity_id ClouddeployTarget#entity_id}

---

##### `anthosClusters`<sup>Optional</sup> <a name="anthosClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.anthosClusters"></a>

```typescript
public readonly anthosClusters: IResolvable | ClouddeployTargetAssociatedEntitiesAnthosClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

anthos_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#anthos_clusters ClouddeployTarget#anthos_clusters}

---

##### `gkeClusters`<sup>Optional</sup> <a name="gkeClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities.property.gkeClusters"></a>

```typescript
public readonly gkeClusters: IResolvable | ClouddeployTargetAssociatedEntitiesGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#gke_clusters ClouddeployTarget#gke_clusters}

---

### ClouddeployTargetAssociatedEntitiesAnthosClusters <a name="ClouddeployTargetAssociatedEntitiesAnthosClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetAssociatedEntitiesAnthosClusters: clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership">membership</a></code> | <code>string</code> | Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

### ClouddeployTargetAssociatedEntitiesGkeClusters <a name="ClouddeployTargetAssociatedEntitiesGkeClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetAssociatedEntitiesGkeClusters: clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster">cluster</a></code> | <code>string</code> | Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}

---

### ClouddeployTargetConfig <a name="ClouddeployTargetConfig" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetConfig: clouddeployTarget.ClouddeployTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name">name</a></code> | <code>string</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.associatedEntities">associatedEntities</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>[]</code> | associated_entities block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.customTarget">customTarget</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deployParameters">deployParameters</a></code> | <code>{[ key: string ]: string}</code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs">executionConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>[]</code> | execution_configs block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke">gke</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run">run</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#name ClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}

---

##### `anthosCluster`<sup>Optional</sup> <a name="anthosCluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster"></a>

```typescript
public readonly anthosCluster: ClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}

---

##### `associatedEntities`<sup>Optional</sup> <a name="associatedEntities" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.associatedEntities"></a>

```typescript
public readonly associatedEntities: IResolvable | ClouddeployTargetAssociatedEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>[]

associated_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#associated_entities ClouddeployTarget#associated_entities}

---

##### `customTarget`<sup>Optional</sup> <a name="customTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.customTarget"></a>

```typescript
public readonly customTarget: ClouddeployTargetCustomTarget;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#custom_target ClouddeployTarget#custom_target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#deletion_policy ClouddeployTarget#deletion_policy}

---

##### `deployParameters`<sup>Optional</sup> <a name="deployParameters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.deployParameters"></a>

```typescript
public readonly deployParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#deploy_parameters ClouddeployTarget#deploy_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#description ClouddeployTarget#description}

---

##### `executionConfigs`<sup>Optional</sup> <a name="executionConfigs" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs"></a>

```typescript
public readonly executionConfigs: IResolvable | ClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>[]

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke"></a>

```typescript
public readonly gke: ClouddeployTargetGke;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#id ClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}

---

##### `multiTarget`<sup>Optional</sup> <a name="multiTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.multiTarget"></a>

```typescript
public readonly multiTarget: ClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#multi_target ClouddeployTarget#multi_target}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#project ClouddeployTarget#project}

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run"></a>

```typescript
public readonly run: ClouddeployTargetRun;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#run ClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddeployTargetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}

---

### ClouddeployTargetCustomTarget <a name="ClouddeployTargetCustomTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetCustomTarget: clouddeployTarget.ClouddeployTargetCustomTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.property.customTargetType">customTargetType</a></code> | <code>string</code> | Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. |

---

##### `customTargetType`<sup>Required</sup> <a name="customTargetType" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget.property.customTargetType"></a>

```typescript
public readonly customTargetType: string;
```

- *Type:* string

Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#custom_target_type ClouddeployTarget#custom_target_type}

---

### ClouddeployTargetExecutionConfigs <a name="ClouddeployTargetExecutionConfigs" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetExecutionConfigs: clouddeployTarget.ClouddeployTargetExecutionConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages">usages</a></code> | <code>string[]</code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.defaultPool">defaultPool</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool">ClouddeployTargetExecutionConfigsDefaultPool</a></code> | default_pool block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.privatePool">privatePool</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool">ClouddeployTargetExecutionConfigsPrivatePool</a></code> | private_pool block. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.verbose">verbose</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. If true, additional logging will be enabled when running builds in this execution environment. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool">workerPool</a></code> | <code>string</code> | Optional. |

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#usages ClouddeployTarget#usages}

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}

---

##### `defaultPool`<sup>Optional</sup> <a name="defaultPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.defaultPool"></a>

```typescript
public readonly defaultPool: ClouddeployTargetExecutionConfigsDefaultPool;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool">ClouddeployTargetExecutionConfigsDefaultPool</a>

default_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#default_pool ClouddeployTarget#default_pool}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#execution_timeout ClouddeployTarget#execution_timeout}

---

##### `privatePool`<sup>Optional</sup> <a name="privatePool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.privatePool"></a>

```typescript
public readonly privatePool: ClouddeployTargetExecutionConfigsPrivatePool;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool">ClouddeployTargetExecutionConfigsPrivatePool</a>

private_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#private_pool ClouddeployTarget#private_pool}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}

---

##### `verbose`<sup>Optional</sup> <a name="verbose" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.verbose"></a>

```typescript
public readonly verbose: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. If true, additional logging will be enabled when running builds in this execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#verbose ClouddeployTarget#verbose}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}

---

### ClouddeployTargetExecutionConfigsDefaultPool <a name="ClouddeployTargetExecutionConfigsDefaultPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetExecutionConfigsDefaultPool: clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. |

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

Optional.

Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}

---

### ClouddeployTargetExecutionConfigsPrivatePool <a name="ClouddeployTargetExecutionConfigsPrivatePool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetExecutionConfigsPrivatePool: clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool.property.workerPool">workerPool</a></code> | <code>string</code> | Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. |

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

Optional.

Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}

---

### ClouddeployTargetGke <a name="ClouddeployTargetGke" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetGke: clouddeployTarget.ClouddeployTargetGke = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster">cluster</a></code> | <code>string</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.dnsEndpoint">dnsEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

##### `dnsEndpoint`<sup>Optional</sup> <a name="dnsEndpoint" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.dnsEndpoint"></a>

```typescript
public readonly dnsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

If set, the cluster will be accessed using the DNS endpoint. Note that both `dns_endpoint` and `internal_ip` cannot be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#dns_endpoint ClouddeployTarget#dns_endpoint}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#proxy_url ClouddeployTarget#proxy_url}

---

### ClouddeployTargetMultiTarget <a name="ClouddeployTargetMultiTarget" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetMultiTarget: clouddeployTarget.ClouddeployTargetMultiTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.property.targetIds">targetIds</a></code> | <code>string[]</code> | Required. The target_ids of this multiTarget. |

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#target_ids ClouddeployTarget#target_ids}

---

### ClouddeployTargetRun <a name="ClouddeployTargetRun" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetRun: clouddeployTarget.ClouddeployTargetRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location">location</a></code> | <code>string</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

### ClouddeployTargetTimeouts <a name="ClouddeployTargetTimeouts" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

const clouddeployTargetTimeouts: clouddeployTarget.ClouddeployTargetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#create ClouddeployTarget#create}. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#update ClouddeployTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#create ClouddeployTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/clouddeploy_target#update ClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployTargetAnthosClusterOutputReference <a name="ClouddeployTargetAnthosClusterOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership">resetMembership</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMembership` <a name="resetMembership" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```typescript
public resetMembership(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput">membershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```typescript
public readonly membershipInput: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---


### ClouddeployTargetAssociatedEntitiesAnthosClustersList <a name="ClouddeployTargetAssociatedEntitiesAnthosClustersList" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.get"></a>

```typescript
public get(index: number): ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetAssociatedEntitiesAnthosClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

---


### ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference <a name="ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership">resetMembership</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMembership` <a name="resetMembership" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership"></a>

```typescript
public resetMembership(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput">membershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput"></a>

```typescript
public readonly membershipInput: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetAssociatedEntitiesAnthosClusters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>

---


### ClouddeployTargetAssociatedEntitiesGkeClustersList <a name="ClouddeployTargetAssociatedEntitiesGkeClustersList" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.get"></a>

```typescript
public get(index: number): ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetAssociatedEntitiesGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

---


### ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference <a name="ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp"></a>

```typescript
public resetInternalIp(): void
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl"></a>

```typescript
public resetProxyUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput">proxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput"></a>

```typescript
public readonly proxyUrlInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetAssociatedEntitiesGkeClusters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>

---


### ClouddeployTargetAssociatedEntitiesList <a name="ClouddeployTargetAssociatedEntitiesList" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetAssociatedEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.get"></a>

```typescript
public get(index: number): ClouddeployTargetAssociatedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetAssociatedEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>[]

---


### ClouddeployTargetAssociatedEntitiesOutputReference <a name="ClouddeployTargetAssociatedEntitiesOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters">putAnthosClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters">putGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters">resetAnthosClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters">resetGkeClusters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnthosClusters` <a name="putAnthosClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters"></a>

```typescript
public putAnthosClusters(value: IResolvable | ClouddeployTargetAssociatedEntitiesAnthosClusters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

---

##### `putGkeClusters` <a name="putGkeClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters"></a>

```typescript
public putGkeClusters(value: IResolvable | ClouddeployTargetAssociatedEntitiesGkeClusters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

---

##### `resetAnthosClusters` <a name="resetAnthosClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters"></a>

```typescript
public resetAnthosClusters(): void
```

##### `resetGkeClusters` <a name="resetGkeClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters"></a>

```typescript
public resetGkeClusters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters">anthosClusters</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList">ClouddeployTargetAssociatedEntitiesAnthosClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters">gkeClusters</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList">ClouddeployTargetAssociatedEntitiesGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput">anthosClustersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput">gkeClustersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anthosClusters`<sup>Required</sup> <a name="anthosClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters"></a>

```typescript
public readonly anthosClusters: ClouddeployTargetAssociatedEntitiesAnthosClustersList;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClustersList">ClouddeployTargetAssociatedEntitiesAnthosClustersList</a>

---

##### `gkeClusters`<sup>Required</sup> <a name="gkeClusters" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters"></a>

```typescript
public readonly gkeClusters: ClouddeployTargetAssociatedEntitiesGkeClustersList;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClustersList">ClouddeployTargetAssociatedEntitiesGkeClustersList</a>

---

##### `anthosClustersInput`<sup>Optional</sup> <a name="anthosClustersInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput"></a>

```typescript
public readonly anthosClustersInput: IResolvable | ClouddeployTargetAssociatedEntitiesAnthosClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesAnthosClusters">ClouddeployTargetAssociatedEntitiesAnthosClusters</a>[]

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `gkeClustersInput`<sup>Optional</sup> <a name="gkeClustersInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput"></a>

```typescript
public readonly gkeClustersInput: IResolvable | ClouddeployTargetAssociatedEntitiesGkeClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesGkeClusters">ClouddeployTargetAssociatedEntitiesGkeClusters</a>[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetAssociatedEntities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetAssociatedEntities">ClouddeployTargetAssociatedEntities</a>

---


### ClouddeployTargetCustomTargetOutputReference <a name="ClouddeployTargetCustomTargetOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetCustomTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput">customTargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetType">customTargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customTargetTypeInput`<sup>Optional</sup> <a name="customTargetTypeInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput"></a>

```typescript
public readonly customTargetTypeInput: string;
```

- *Type:* string

---

##### `customTargetType`<sup>Required</sup> <a name="customTargetType" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.customTargetType"></a>

```typescript
public readonly customTargetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployTargetCustomTarget;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetCustomTarget">ClouddeployTargetCustomTarget</a>

---


### ClouddeployTargetExecutionConfigsDefaultPoolOutputReference <a name="ClouddeployTargetExecutionConfigsDefaultPoolOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetArtifactStorage"></a>

```typescript
public resetArtifactStorage(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool">ClouddeployTargetExecutionConfigsDefaultPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorageInput"></a>

```typescript
public readonly artifactStorageInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployTargetExecutionConfigsDefaultPool;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool">ClouddeployTargetExecutionConfigsDefaultPool</a>

---


### ClouddeployTargetExecutionConfigsList <a name="ClouddeployTargetExecutionConfigsList" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetExecutionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get"></a>

```typescript
public get(index: number): ClouddeployTargetExecutionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>[]

---


### ClouddeployTargetExecutionConfigsOutputReference <a name="ClouddeployTargetExecutionConfigsOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.putDefaultPool">putDefaultPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.putPrivatePool">putPrivatePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetDefaultPool">resetDefaultPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetPrivatePool">resetPrivatePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetVerbose">resetVerbose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultPool` <a name="putDefaultPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.putDefaultPool"></a>

```typescript
public putDefaultPool(value: ClouddeployTargetExecutionConfigsDefaultPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.putDefaultPool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool">ClouddeployTargetExecutionConfigsDefaultPool</a>

---

##### `putPrivatePool` <a name="putPrivatePool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.putPrivatePool"></a>

```typescript
public putPrivatePool(value: ClouddeployTargetExecutionConfigsPrivatePool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.putPrivatePool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool">ClouddeployTargetExecutionConfigsPrivatePool</a>

---

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```typescript
public resetArtifactStorage(): void
```

##### `resetDefaultPool` <a name="resetDefaultPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetDefaultPool"></a>

```typescript
public resetDefaultPool(): void
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```typescript
public resetExecutionTimeout(): void
```

##### `resetPrivatePool` <a name="resetPrivatePool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetPrivatePool"></a>

```typescript
public resetPrivatePool(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetVerbose` <a name="resetVerbose" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetVerbose"></a>

```typescript
public resetVerbose(): void
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```typescript
public resetWorkerPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.defaultPool">defaultPool</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference">ClouddeployTargetExecutionConfigsDefaultPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.privatePool">privatePool</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference">ClouddeployTargetExecutionConfigsPrivatePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.defaultPoolInput">defaultPoolInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool">ClouddeployTargetExecutionConfigsDefaultPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.privatePoolInput">privatePoolInput</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool">ClouddeployTargetExecutionConfigsPrivatePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">usagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verboseInput">verboseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verbose">verbose</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPool`<sup>Required</sup> <a name="defaultPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.defaultPool"></a>

```typescript
public readonly defaultPool: ClouddeployTargetExecutionConfigsDefaultPoolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPoolOutputReference">ClouddeployTargetExecutionConfigsDefaultPoolOutputReference</a>

---

##### `privatePool`<sup>Required</sup> <a name="privatePool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.privatePool"></a>

```typescript
public readonly privatePool: ClouddeployTargetExecutionConfigsPrivatePoolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference">ClouddeployTargetExecutionConfigsPrivatePoolOutputReference</a>

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```typescript
public readonly artifactStorageInput: string;
```

- *Type:* string

---

##### `defaultPoolInput`<sup>Optional</sup> <a name="defaultPoolInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.defaultPoolInput"></a>

```typescript
public readonly defaultPoolInput: ClouddeployTargetExecutionConfigsDefaultPool;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsDefaultPool">ClouddeployTargetExecutionConfigsDefaultPool</a>

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```typescript
public readonly executionTimeoutInput: string;
```

- *Type:* string

---

##### `privatePoolInput`<sup>Optional</sup> <a name="privatePoolInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.privatePoolInput"></a>

```typescript
public readonly privatePoolInput: ClouddeployTargetExecutionConfigsPrivatePool;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool">ClouddeployTargetExecutionConfigsPrivatePool</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```typescript
public readonly usagesInput: string[];
```

- *Type:* string[]

---

##### `verboseInput`<sup>Optional</sup> <a name="verboseInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verboseInput"></a>

```typescript
public readonly verboseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```typescript
public readonly workerPoolInput: string;
```

- *Type:* string

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `verbose`<sup>Required</sup> <a name="verbose" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.verbose"></a>

```typescript
public readonly verbose: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetExecutionConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>

---


### ClouddeployTargetExecutionConfigsPrivatePoolOutputReference <a name="ClouddeployTargetExecutionConfigsPrivatePoolOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetArtifactStorage"></a>

```typescript
public resetArtifactStorage(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool">ClouddeployTargetExecutionConfigsPrivatePool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorageInput"></a>

```typescript
public readonly artifactStorageInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPoolInput"></a>

```typescript
public readonly workerPoolInput: string;
```

- *Type:* string

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployTargetExecutionConfigsPrivatePool;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsPrivatePool">ClouddeployTargetExecutionConfigsPrivatePool</a>

---


### ClouddeployTargetGkeOutputReference <a name="ClouddeployTargetGkeOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetGkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetDnsEndpoint">resetDnsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetDnsEndpoint` <a name="resetDnsEndpoint" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetDnsEndpoint"></a>

```typescript
public resetDnsEndpoint(): void
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```typescript
public resetInternalIp(): void
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetProxyUrl"></a>

```typescript
public resetProxyUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpointInput">dnsEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrlInput">proxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpoint">dnsEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp">internalIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `dnsEndpointInput`<sup>Optional</sup> <a name="dnsEndpointInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpointInput"></a>

```typescript
public readonly dnsEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrlInput"></a>

```typescript
public readonly proxyUrlInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `dnsEndpoint`<sup>Required</sup> <a name="dnsEndpoint" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.dnsEndpoint"></a>

```typescript
public readonly dnsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployTargetGke;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---


### ClouddeployTargetMultiTargetOutputReference <a name="ClouddeployTargetMultiTargetOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetMultiTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIdsInput">targetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetIdsInput`<sup>Optional</sup> <a name="targetIdsInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIdsInput"></a>

```typescript
public readonly targetIdsInput: string[];
```

- *Type:* string[]

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetMultiTarget">ClouddeployTargetMultiTarget</a>

---


### ClouddeployTargetRunOutputReference <a name="ClouddeployTargetRunOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployTargetRun;
```

- *Type:* <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---


### ClouddeployTargetTimeoutsOutputReference <a name="ClouddeployTargetTimeoutsOutputReference" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```typescript
import { clouddeployTarget } from '@cdktn/provider-google'

new clouddeployTarget.ClouddeployTargetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddeployTargetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

---



