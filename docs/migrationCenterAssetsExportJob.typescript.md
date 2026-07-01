# `migrationCenterAssetsExportJob` Submodule <a name="`migrationCenterAssetsExportJob` Submodule" id="@cdktn/provider-google.migrationCenterAssetsExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterAssetsExportJob <a name="MigrationCenterAssetsExportJob" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job google_migration_center_assets_export_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob(scope: Construct, id: string, config: MigrationCenterAssetsExportJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig">MigrationCenterAssetsExportJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig">MigrationCenterAssetsExportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData">putPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination">putSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetPerformanceData">resetPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetShowHidden">resetShowHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetSignedUriDestination">resetSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition"></a>

```typescript
public putCondition(value: MigrationCenterAssetsExportJobCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---

##### `putPerformanceData` <a name="putPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData"></a>

```typescript
public putPerformanceData(value: MigrationCenterAssetsExportJobPerformanceData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putPerformanceData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---

##### `putSignedUriDestination` <a name="putSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination"></a>

```typescript
public putSignedUriDestination(value: MigrationCenterAssetsExportJobSignedUriDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putSignedUriDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts"></a>

```typescript
public putTimeouts(value: MigrationCenterAssetsExportJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPerformanceData` <a name="resetPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetPerformanceData"></a>

```typescript
public resetPerformanceData(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetShowHidden` <a name="resetShowHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetShowHidden"></a>

```typescript
public resetShowHidden(): void
```

##### `resetSignedUriDestination` <a name="resetSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetSignedUriDestination"></a>

```typescript
public resetSignedUriDestination(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterAssetsExportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterAssetsExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterAssetsExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference">MigrationCenterAssetsExportJobConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.inventory">inventory</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList">MigrationCenterAssetsExportJobInventoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.networkDependencies">networkDependencies</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList">MigrationCenterAssetsExportJobNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference">MigrationCenterAssetsExportJobPerformanceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.recentExecutions">recentExecutions</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList">MigrationCenterAssetsExportJobRecentExecutionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference">MigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference">MigrationCenterAssetsExportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobIdInput">assetsExportJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceDataInput">performanceDataInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHiddenInput">showHiddenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestinationInput">signedUriDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobId">assetsExportJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHidden">showHidden</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.condition"></a>

```typescript
public readonly condition: MigrationCenterAssetsExportJobConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference">MigrationCenterAssetsExportJobConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `inventory`<sup>Required</sup> <a name="inventory" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.inventory"></a>

```typescript
public readonly inventory: MigrationCenterAssetsExportJobInventoryList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList">MigrationCenterAssetsExportJobInventoryList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkDependencies`<sup>Required</sup> <a name="networkDependencies" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.networkDependencies"></a>

```typescript
public readonly networkDependencies: MigrationCenterAssetsExportJobNetworkDependenciesList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList">MigrationCenterAssetsExportJobNetworkDependenciesList</a>

---

##### `performanceData`<sup>Required</sup> <a name="performanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceData"></a>

```typescript
public readonly performanceData: MigrationCenterAssetsExportJobPerformanceDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference">MigrationCenterAssetsExportJobPerformanceDataOutputReference</a>

---

##### `recentExecutions`<sup>Required</sup> <a name="recentExecutions" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.recentExecutions"></a>

```typescript
public readonly recentExecutions: MigrationCenterAssetsExportJobRecentExecutionsList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList">MigrationCenterAssetsExportJobRecentExecutionsList</a>

---

##### `signedUriDestination`<sup>Required</sup> <a name="signedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestination"></a>

```typescript
public readonly signedUriDestination: MigrationCenterAssetsExportJobSignedUriDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference">MigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterAssetsExportJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference">MigrationCenterAssetsExportJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `assetsExportJobIdInput`<sup>Optional</sup> <a name="assetsExportJobIdInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobIdInput"></a>

```typescript
public readonly assetsExportJobIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.conditionInput"></a>

```typescript
public readonly conditionInput: MigrationCenterAssetsExportJobCondition;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `performanceDataInput`<sup>Optional</sup> <a name="performanceDataInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.performanceDataInput"></a>

```typescript
public readonly performanceDataInput: MigrationCenterAssetsExportJobPerformanceData;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `showHiddenInput`<sup>Optional</sup> <a name="showHiddenInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHiddenInput"></a>

```typescript
public readonly showHiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `signedUriDestinationInput`<sup>Optional</sup> <a name="signedUriDestinationInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.signedUriDestinationInput"></a>

```typescript
public readonly signedUriDestinationInput: MigrationCenterAssetsExportJobSignedUriDestination;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MigrationCenterAssetsExportJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.assetsExportJobId"></a>

```typescript
public readonly assetsExportJobId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `showHidden`<sup>Required</sup> <a name="showHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.showHidden"></a>

```typescript
public readonly showHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterAssetsExportJobCondition <a name="MigrationCenterAssetsExportJobCondition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobCondition: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.property.filter">filter</a></code> | <code>string</code> | Assets filter, supports the same syntax as asset listing. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Assets filter, supports the same syntax as asset listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#filter MigrationCenterAssetsExportJob#filter}

---

### MigrationCenterAssetsExportJobConfig <a name="MigrationCenterAssetsExportJobConfig" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobConfig: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.assetsExportJobId">assetsExportJobId</a></code> | <code>string</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.showHidden">showHidden</a></code> | <code>boolean \| cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.assetsExportJobId"></a>

```typescript
public readonly assetsExportJobId: string;
```

- *Type:* string

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#assets_export_job_id MigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#location MigrationCenterAssetsExportJob#location}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.condition"></a>

```typescript
public readonly condition: MigrationCenterAssetsExportJobCondition;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#condition MigrationCenterAssetsExportJob#condition}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#deletion_policy MigrationCenterAssetsExportJob#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#id MigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#labels MigrationCenterAssetsExportJob#labels}

---

##### `performanceData`<sup>Optional</sup> <a name="performanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.performanceData"></a>

```typescript
public readonly performanceData: MigrationCenterAssetsExportJobPerformanceData;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#performance_data MigrationCenterAssetsExportJob#performance_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#project MigrationCenterAssetsExportJob#project}.

---

##### `showHidden`<sup>Optional</sup> <a name="showHidden" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.showHidden"></a>

```typescript
public readonly showHidden: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#show_hidden MigrationCenterAssetsExportJob#show_hidden}

---

##### `signedUriDestination`<sup>Optional</sup> <a name="signedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.signedUriDestination"></a>

```typescript
public readonly signedUriDestination: MigrationCenterAssetsExportJobSignedUriDestination;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#signed_uri_destination MigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterAssetsExportJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#timeouts MigrationCenterAssetsExportJob#timeouts}

---

### MigrationCenterAssetsExportJobInventory <a name="MigrationCenterAssetsExportJobInventory" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobInventory: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory = { ... }
```


### MigrationCenterAssetsExportJobNetworkDependencies <a name="MigrationCenterAssetsExportJobNetworkDependencies" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobNetworkDependencies: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies = { ... }
```


### MigrationCenterAssetsExportJobPerformanceData <a name="MigrationCenterAssetsExportJobPerformanceData" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobPerformanceData: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.property.maxDays">maxDays</a></code> | <code>number</code> | When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. |

---

##### `maxDays`<sup>Optional</sup> <a name="maxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData.property.maxDays"></a>

```typescript
public readonly maxDays: number;
```

- *Type:* number

When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available.

When this value is unset (or set to zero),
all available data is returned.
The maximum value is 420; values above 420 will be coerced to 420.
If unset (0 value) a default value of 40 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#max_days MigrationCenterAssetsExportJob#max_days}

---

### MigrationCenterAssetsExportJobRecentExecutions <a name="MigrationCenterAssetsExportJobRecentExecutions" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutions: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResult <a name="MigrationCenterAssetsExportJobRecentExecutionsResult" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResult: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultError <a name="MigrationCenterAssetsExportJobRecentExecutionsResultError" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultError: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultErrorDetails: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultOutputFiles: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultSignedUris: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris = { ... }
```


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris = { ... }
```


### MigrationCenterAssetsExportJobSignedUriDestination <a name="MigrationCenterAssetsExportJobSignedUriDestination" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobSignedUriDestination: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat">fileFormat</a></code> | <code>string</code> | The file format to export. Possible values: CSV XLSX. |

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

The file format to export. Possible values: CSV XLSX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#file_format MigrationCenterAssetsExportJob#file_format}

---

### MigrationCenterAssetsExportJobTimeouts <a name="MigrationCenterAssetsExportJobTimeouts" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

const migrationCenterAssetsExportJobTimeouts: migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#create MigrationCenterAssetsExportJob#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#delete MigrationCenterAssetsExportJob#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#update MigrationCenterAssetsExportJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#create MigrationCenterAssetsExportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#delete MigrationCenterAssetsExportJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_assets_export_job#update MigrationCenterAssetsExportJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterAssetsExportJobConditionOutputReference <a name="MigrationCenterAssetsExportJobConditionOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobCondition;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobCondition">MigrationCenterAssetsExportJobCondition</a>

---


### MigrationCenterAssetsExportJobInventoryList <a name="MigrationCenterAssetsExportJobInventoryList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobInventoryOutputReference <a name="MigrationCenterAssetsExportJobInventoryOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory">MigrationCenterAssetsExportJobInventory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobInventory;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobInventory">MigrationCenterAssetsExportJobInventory</a>

---


### MigrationCenterAssetsExportJobNetworkDependenciesList <a name="MigrationCenterAssetsExportJobNetworkDependenciesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobNetworkDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobNetworkDependenciesOutputReference <a name="MigrationCenterAssetsExportJobNetworkDependenciesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies">MigrationCenterAssetsExportJobNetworkDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobNetworkDependencies;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobNetworkDependencies">MigrationCenterAssetsExportJobNetworkDependencies</a>

---


### MigrationCenterAssetsExportJobPerformanceDataOutputReference <a name="MigrationCenterAssetsExportJobPerformanceDataOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays">resetMaxDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDays` <a name="resetMaxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays"></a>

```typescript
public resetMaxDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput">maxDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays">maxDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxDaysInput`<sup>Optional</sup> <a name="maxDaysInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput"></a>

```typescript
public readonly maxDaysInput: number;
```

- *Type:* number

---

##### `maxDays`<sup>Required</sup> <a name="maxDays" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays"></a>

```typescript
public readonly maxDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobPerformanceData;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobPerformanceData">MigrationCenterAssetsExportJobPerformanceData</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsList <a name="MigrationCenterAssetsExportJobRecentExecutionsList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId">executionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount">requestedAssetCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result">result</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList">MigrationCenterAssetsExportJobRecentExecutionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions">MigrationCenterAssetsExportJobRecentExecutions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `requestedAssetCount`<sup>Required</sup> <a name="requestedAssetCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount"></a>

```typescript
public readonly requestedAssetCount: number;
```

- *Type:* number

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result"></a>

```typescript
public readonly result: MigrationCenterAssetsExportJobRecentExecutionsResultList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList">MigrationCenterAssetsExportJobRecentExecutionsResultList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutions;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutions">MigrationCenterAssetsExportJobRecentExecutions</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError">MigrationCenterAssetsExportJobRecentExecutionsResultError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details"></a>

```typescript
public readonly details: MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultError;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultError">MigrationCenterAssetsExportJobRecentExecutionsResultError</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount">columnsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount">rowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri">signedUri</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnsCount`<sup>Required</sup> <a name="columnsCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount"></a>

```typescript
public readonly columnsCount: number;
```

- *Type:* number

---

##### `rowCount`<sup>Required</sup> <a name="rowCount" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount"></a>

```typescript
public readonly rowCount: number;
```

- *Type:* number

---

##### `signedUri`<sup>Required</sup> <a name="signedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri"></a>

```typescript
public readonly signedUri: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile">csvOutputFile</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes">fileSizeBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile">xlsxOutputFile</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvOutputFile`<sup>Required</sup> <a name="csvOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile"></a>

```typescript
public readonly csvOutputFile: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a>

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes"></a>

```typescript
public readonly fileSizeBytes: string;
```

- *Type:* string

---

##### `xlsxOutputFile`<sup>Required</sup> <a name="xlsxOutputFile" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile"></a>

```typescript
public readonly xlsxOutputFile: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri">signedUri</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signedUri`<sup>Required</sup> <a name="signedUri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri"></a>

```typescript
public readonly signedUri: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries"></a>

```typescript
public readonly entries: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles">outputFiles</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris">signedUris</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult">MigrationCenterAssetsExportJobRecentExecutionsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error"></a>

```typescript
public readonly error: MigrationCenterAssetsExportJobRecentExecutionsResultErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultErrorList">MigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a>

---

##### `outputFiles`<sup>Required</sup> <a name="outputFiles" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles"></a>

```typescript
public readonly outputFiles: MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">MigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a>

---

##### `signedUris`<sup>Required</sup> <a name="signedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris"></a>

```typescript
public readonly signedUris: MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResult;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResult">MigrationCenterAssetsExportJobRecentExecutionsResult</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris">signedUris</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signedUris`<sup>Required</sup> <a name="signedUris" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris"></a>

```typescript
public readonly signedUris: MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a>

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get"></a>

```typescript
public get(index: number): MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference <a name="MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">MigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a>

---


### MigrationCenterAssetsExportJobSignedUriDestinationOutputReference <a name="MigrationCenterAssetsExportJobSignedUriDestinationOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput">fileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat">fileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput"></a>

```typescript
public readonly fileFormatInput: string;
```

- *Type:* string

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterAssetsExportJobSignedUriDestination;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobSignedUriDestination">MigrationCenterAssetsExportJobSignedUriDestination</a>

---


### MigrationCenterAssetsExportJobTimeoutsOutputReference <a name="MigrationCenterAssetsExportJobTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { migrationCenterAssetsExportJob } from '@cdktn/provider-google'

new migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterAssetsExportJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterAssetsExportJob.MigrationCenterAssetsExportJobTimeouts">MigrationCenterAssetsExportJobTimeouts</a>

---



