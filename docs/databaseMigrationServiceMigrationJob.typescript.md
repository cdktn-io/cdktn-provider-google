# `databaseMigrationServiceMigrationJob` Submodule <a name="`databaseMigrationServiceMigrationJob` Submodule" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServiceMigrationJob <a name="DatabaseMigrationServiceMigrationJob" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job google_database_migration_service_migration_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob(scope: Construct, id: string, config: DatabaseMigrationServiceMigrationJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig">DatabaseMigrationServiceMigrationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig">DatabaseMigrationServiceMigrationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putObjectsConfig">putObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig">putPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPostgresHomogeneousConfig">putPostgresHomogeneousConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity">putReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity">putStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity">putVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpPath">resetDumpPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpType">resetDumpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetObjectsConfig">resetObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPerformanceConfig">resetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPostgresHomogeneousConfig">resetPostgresHomogeneousConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity">resetReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity">resetStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStopOnWarnings">resetStopOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity">resetVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags"></a>

```typescript
public putDumpFlags(value: DatabaseMigrationServiceMigrationJobDumpFlags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putDumpFlags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `putObjectsConfig` <a name="putObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putObjectsConfig"></a>

```typescript
public putObjectsConfig(value: DatabaseMigrationServiceMigrationJobObjectsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putObjectsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

---

##### `putPerformanceConfig` <a name="putPerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig"></a>

```typescript
public putPerformanceConfig(value: DatabaseMigrationServiceMigrationJobPerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `putPostgresHomogeneousConfig` <a name="putPostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPostgresHomogeneousConfig"></a>

```typescript
public putPostgresHomogeneousConfig(value: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putPostgresHomogeneousConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

---

##### `putReverseSshConnectivity` <a name="putReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity"></a>

```typescript
public putReverseSshConnectivity(value: DatabaseMigrationServiceMigrationJobReverseSshConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putReverseSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `putStaticIpConnectivity` <a name="putStaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity"></a>

```typescript
public putStaticIpConnectivity(value: DatabaseMigrationServiceMigrationJobStaticIpConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putStaticIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseMigrationServiceMigrationJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `putVpcPeeringConnectivity` <a name="putVpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity"></a>

```typescript
public putVpcPeeringConnectivity(value: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpFlags"></a>

```typescript
public resetDumpFlags(): void
```

##### `resetDumpPath` <a name="resetDumpPath" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpPath"></a>

```typescript
public resetDumpPath(): void
```

##### `resetDumpType` <a name="resetDumpType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetDumpType"></a>

```typescript
public resetDumpType(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetObjectsConfig` <a name="resetObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetObjectsConfig"></a>

```typescript
public resetObjectsConfig(): void
```

##### `resetPerformanceConfig` <a name="resetPerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPerformanceConfig"></a>

```typescript
public resetPerformanceConfig(): void
```

##### `resetPostgresHomogeneousConfig` <a name="resetPostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetPostgresHomogeneousConfig"></a>

```typescript
public resetPostgresHomogeneousConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReverseSshConnectivity` <a name="resetReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity"></a>

```typescript
public resetReverseSshConnectivity(): void
```

##### `resetStaticIpConnectivity` <a name="resetStaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity"></a>

```typescript
public resetStaticIpConnectivity(): void
```

##### `resetStopOnWarnings` <a name="resetStopOnWarnings" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetStopOnWarnings"></a>

```typescript
public resetStopOnWarnings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcPeeringConnectivity` <a name="resetVpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity"></a>

```typescript
public resetVpcPeeringConnectivity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabaseMigrationServiceMigrationJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatabaseMigrationServiceMigrationJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMigrationServiceMigrationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMigrationServiceMigrationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServiceMigrationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList">DatabaseMigrationServiceMigrationJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfig">objectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfig">postgresHomogeneousConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference">DatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPathInput">dumpPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpTypeInput">dumpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobIdInput">migrationJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfigInput">objectsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfigInput">performanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfigInput">postgresHomogeneousConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput">reverseSshConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput">staticIpConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarningsInput">stopOnWarningsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput">vpcPeeringConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPath">dumpPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpType">dumpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobId">migrationJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarnings">stopOnWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.error"></a>

```typescript
public readonly error: DatabaseMigrationServiceMigrationJobErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList">DatabaseMigrationServiceMigrationJobErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectsConfig`<sup>Required</sup> <a name="objectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfig"></a>

```typescript
public readonly objectsConfig: DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference</a>

---

##### `performanceConfig`<sup>Required</sup> <a name="performanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a>

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `postgresHomogeneousConfig`<sup>Required</sup> <a name="postgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfig"></a>

```typescript
public readonly postgresHomogeneousConfig: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference</a>

---

##### `reverseSshConnectivity`<sup>Required</sup> <a name="reverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity"></a>

```typescript
public readonly reverseSshConnectivity: DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `staticIpConnectivity`<sup>Required</sup> <a name="staticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivity"></a>

```typescript
public readonly staticIpConnectivity: DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMigrationServiceMigrationJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference">DatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a>

---

##### `vpcPeeringConnectivity`<sup>Required</sup> <a name="vpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity"></a>

```typescript
public readonly vpcPeeringConnectivity: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpFlagsInput"></a>

```typescript
public readonly dumpFlagsInput: DatabaseMigrationServiceMigrationJobDumpFlags;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `dumpPathInput`<sup>Optional</sup> <a name="dumpPathInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPathInput"></a>

```typescript
public readonly dumpPathInput: string;
```

- *Type:* string

---

##### `dumpTypeInput`<sup>Optional</sup> <a name="dumpTypeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpTypeInput"></a>

```typescript
public readonly dumpTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `migrationJobIdInput`<sup>Optional</sup> <a name="migrationJobIdInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobIdInput"></a>

```typescript
public readonly migrationJobIdInput: string;
```

- *Type:* string

---

##### `objectsConfigInput`<sup>Optional</sup> <a name="objectsConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.objectsConfigInput"></a>

```typescript
public readonly objectsConfigInput: DatabaseMigrationServiceMigrationJobObjectsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

---

##### `performanceConfigInput`<sup>Optional</sup> <a name="performanceConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.performanceConfigInput"></a>

```typescript
public readonly performanceConfigInput: DatabaseMigrationServiceMigrationJobPerformanceConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `postgresHomogeneousConfigInput`<sup>Optional</sup> <a name="postgresHomogeneousConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.postgresHomogeneousConfigInput"></a>

```typescript
public readonly postgresHomogeneousConfigInput: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reverseSshConnectivityInput`<sup>Optional</sup> <a name="reverseSshConnectivityInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput"></a>

```typescript
public readonly reverseSshConnectivityInput: DatabaseMigrationServiceMigrationJobReverseSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `staticIpConnectivityInput`<sup>Optional</sup> <a name="staticIpConnectivityInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput"></a>

```typescript
public readonly staticIpConnectivityInput: DatabaseMigrationServiceMigrationJobStaticIpConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `stopOnWarningsInput`<sup>Optional</sup> <a name="stopOnWarningsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarningsInput"></a>

```typescript
public readonly stopOnWarningsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseMigrationServiceMigrationJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcPeeringConnectivityInput`<sup>Optional</sup> <a name="vpcPeeringConnectivityInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput"></a>

```typescript
public readonly vpcPeeringConnectivityInput: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dumpPath`<sup>Required</sup> <a name="dumpPath" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpPath"></a>

```typescript
public readonly dumpPath: string;
```

- *Type:* string

---

##### `dumpType`<sup>Required</sup> <a name="dumpType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.dumpType"></a>

```typescript
public readonly dumpType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.migrationJobId"></a>

```typescript
public readonly migrationJobId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `stopOnWarnings`<sup>Required</sup> <a name="stopOnWarnings" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.stopOnWarnings"></a>

```typescript
public readonly stopOnWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServiceMigrationJobConfig <a name="DatabaseMigrationServiceMigrationJobConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobConfig: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.destination">destination</a></code> | <code>string</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.migrationJobId">migrationJobId</a></code> | <code>string</code> | The ID of the migration job. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.source">source</a></code> | <code>string</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.type">type</a></code> | <code>string</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.desiredState">desiredState</a></code> | <code>string</code> | The desired state of the migration job. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.displayName">displayName</a></code> | <code>string</code> | The migration job display name. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpPath">dumpPath</a></code> | <code>string</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpType">dumpType</a></code> | <code>string</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.location">location</a></code> | <code>string</code> | The location where the migration job should reside. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.objectsConfig">objectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a></code> | objects_config block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.postgresHomogeneousConfig">postgresHomogeneousConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a></code> | postgres_homogeneous_config block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.stopOnWarnings">stopOnWarnings</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, will stop the Terraform apply if there are validation warnings. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#destination DatabaseMigrationServiceMigrationJob#destination}

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.migrationJobId"></a>

```typescript
public readonly migrationJobId: string;
```

- *Type:* string

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#migration_job_id DatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#source DatabaseMigrationServiceMigrationJob#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#deletion_policy DatabaseMigrationServiceMigrationJob#deletion_policy}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

The desired state of the migration job.

If set to 'RUNNING', the migration job will be started. Possible values: ["NOT_STARTED", "RUNNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#desired_state DatabaseMigrationServiceMigrationJob#desired_state}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#display_name DatabaseMigrationServiceMigrationJob#display_name}

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: DatabaseMigrationServiceMigrationJobDumpFlags;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `dumpPath`<sup>Optional</sup> <a name="dumpPath" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpPath"></a>

```typescript
public readonly dumpPath: string;
```

- *Type:* string

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_path DatabaseMigrationServiceMigrationJob#dump_path}

---

##### `dumpType`<sup>Optional</sup> <a name="dumpType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.dumpType"></a>

```typescript
public readonly dumpType: string;
```

- *Type:* string

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_type DatabaseMigrationServiceMigrationJob#dump_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#id DatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#labels DatabaseMigrationServiceMigrationJob#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#location DatabaseMigrationServiceMigrationJob#location}

---

##### `objectsConfig`<sup>Optional</sup> <a name="objectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.objectsConfig"></a>

```typescript
public readonly objectsConfig: DatabaseMigrationServiceMigrationJobObjectsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

objects_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#objects_config DatabaseMigrationServiceMigrationJob#objects_config}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.performanceConfig"></a>

```typescript
public readonly performanceConfig: DatabaseMigrationServiceMigrationJobPerformanceConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#performance_config DatabaseMigrationServiceMigrationJob#performance_config}

---

##### `postgresHomogeneousConfig`<sup>Optional</sup> <a name="postgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.postgresHomogeneousConfig"></a>

```typescript
public readonly postgresHomogeneousConfig: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

postgres_homogeneous_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#postgres_homogeneous_config DatabaseMigrationServiceMigrationJob#postgres_homogeneous_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#project DatabaseMigrationServiceMigrationJob#project}.

---

##### `reverseSshConnectivity`<sup>Optional</sup> <a name="reverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity"></a>

```typescript
public readonly reverseSshConnectivity: DatabaseMigrationServiceMigrationJobReverseSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#reverse_ssh_connectivity DatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `staticIpConnectivity`<sup>Optional</sup> <a name="staticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity"></a>

```typescript
public readonly staticIpConnectivity: DatabaseMigrationServiceMigrationJobStaticIpConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#static_ip_connectivity DatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `stopOnWarnings`<sup>Optional</sup> <a name="stopOnWarnings" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.stopOnWarnings"></a>

```typescript
public readonly stopOnWarnings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, will stop the Terraform apply if there are validation warnings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#stop_on_warnings DatabaseMigrationServiceMigrationJob#stop_on_warnings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMigrationServiceMigrationJobTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#timeouts DatabaseMigrationServiceMigrationJob#timeouts}

---

##### `vpcPeeringConnectivity`<sup>Optional</sup> <a name="vpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity"></a>

```typescript
public readonly vpcPeeringConnectivity: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vpc_peering_connectivity DatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

### DatabaseMigrationServiceMigrationJobDumpFlags <a name="DatabaseMigrationServiceMigrationJobDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobDumpFlags: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags">dumpFlags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]</code> | dump_flags block. |

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: IResolvable | DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_flags DatabaseMigrationServiceMigrationJob#dump_flags}

---

### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobDumpFlagsDumpFlags: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name">name</a></code> | <code>string</code> | The name of the flag. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value">value</a></code> | <code>string</code> | The vale of the flag. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#name DatabaseMigrationServiceMigrationJob#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The vale of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#value DatabaseMigrationServiceMigrationJob#value}

---

### DatabaseMigrationServiceMigrationJobError <a name="DatabaseMigrationServiceMigrationJobError" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobError: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError = { ... }
```


### DatabaseMigrationServiceMigrationJobObjectsConfig <a name="DatabaseMigrationServiceMigrationJobObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobObjectsConfig: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig.property.sourceObjectsConfig">sourceObjectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a></code> | source_objects_config block. |

---

##### `sourceObjectsConfig`<sup>Optional</sup> <a name="sourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig.property.sourceObjectsConfig"></a>

```typescript
public readonly sourceObjectsConfig: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

source_objects_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#source_objects_config DatabaseMigrationServiceMigrationJob#source_objects_config}

---

### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectConfigs">objectConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>[]</code> | object_configs block. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectsSelectionType">objectsSelectionType</a></code> | <code>string</code> | The objects selection type of the migration job. |

---

##### `objectConfigs`<sup>Optional</sup> <a name="objectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectConfigs"></a>

```typescript
public readonly objectConfigs: IResolvable | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>[]

object_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#object_configs DatabaseMigrationServiceMigrationJob#object_configs}

---

##### `objectsSelectionType`<sup>Optional</sup> <a name="objectsSelectionType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig.property.objectsSelectionType"></a>

```typescript
public readonly objectsSelectionType: string;
```

- *Type:* string

The objects selection type of the migration job.

When set to
'SPECIFIED_OBJECTS', only the objects listed in 'objectConfigs' are
migrated. When set to 'ALL_OBJECTS', all objects available on the
source are migrated. Possible values: ["ALL_OBJECTS", "SPECIFIED_OBJECTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#objects_selection_type DatabaseMigrationServiceMigrationJob#objects_selection_type}

---

### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs.property.objectIdentifier">objectIdentifier</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a></code> | object_identifier block. |

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#object_identifier DatabaseMigrationServiceMigrationJob#object_identifier}

---

### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.type">type</a></code> | <code>string</code> | The category of the migration job object: 'DATABASE', 'SCHEMA', or 'TABLE'. Possible values: ["DATABASE", "SCHEMA", "TABLE"]. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.database">database</a></code> | <code>string</code> | The database name. Required only if the object uses a database name as part of its unique identifier. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.schema">schema</a></code> | <code>string</code> | The schema name. Required only if the object uses a schema name as part of its unique identifier. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.table">table</a></code> | <code>string</code> | The table name. Required only if the object is a level below database or schema. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The category of the migration job object: 'DATABASE', 'SCHEMA', or 'TABLE'. Possible values: ["DATABASE", "SCHEMA", "TABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#type DatabaseMigrationServiceMigrationJob#type}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database name. Required only if the object uses a database name as part of its unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#database DatabaseMigrationServiceMigrationJob#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema name. Required only if the object uses a schema name as part of its unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#schema DatabaseMigrationServiceMigrationJob#schema}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The table name. Required only if the object is a level below database or schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#table DatabaseMigrationServiceMigrationJob#table}

---

### DatabaseMigrationServiceMigrationJobPerformanceConfig <a name="DatabaseMigrationServiceMigrationJobPerformanceConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobPerformanceConfig: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>string</code> | Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"]. |

---

##### `dumpParallelLevel`<sup>Optional</sup> <a name="dumpParallelLevel" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel"></a>

```typescript
public readonly dumpParallelLevel: string;
```

- *Type:* string

Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#dump_parallel_level DatabaseMigrationServiceMigrationJob#dump_parallel_level}

---

### DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig <a name="DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobPostgresHomogeneousConfig: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.isNativeLogical">isNativeLogical</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the migration uses native logical replication. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.maxAdditionalSubscriptions">maxAdditionalSubscriptions</a></code> | <code>number</code> | Maximum number of additional subscriptions to use for the migration job. |

---

##### `isNativeLogical`<sup>Required</sup> <a name="isNativeLogical" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.isNativeLogical"></a>

```typescript
public readonly isNativeLogical: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the migration uses native logical replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#is_native_logical DatabaseMigrationServiceMigrationJob#is_native_logical}

---

##### `maxAdditionalSubscriptions`<sup>Optional</sup> <a name="maxAdditionalSubscriptions" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig.property.maxAdditionalSubscriptions"></a>

```typescript
public readonly maxAdditionalSubscriptions: number;
```

- *Type:* number

Maximum number of additional subscriptions to use for the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#max_additional_subscriptions DatabaseMigrationServiceMigrationJob#max_additional_subscriptions}

---

### DatabaseMigrationServiceMigrationJobReverseSshConnectivity <a name="DatabaseMigrationServiceMigrationJobReverseSshConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobReverseSshConnectivity: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm">vm</a></code> | <code>string</code> | The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp">vmIp</a></code> | <code>string</code> | The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort">vmPort</a></code> | <code>number</code> | The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc">vpc</a></code> | <code>string</code> | The name of the VPC to peer with the Cloud SQL private network. |

---

##### `vm`<sup>Optional</sup> <a name="vm" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm"></a>

```typescript
public readonly vm: string;
```

- *Type:* string

The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vm DatabaseMigrationServiceMigrationJob#vm}

---

##### `vmIp`<sup>Optional</sup> <a name="vmIp" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp"></a>

```typescript
public readonly vmIp: string;
```

- *Type:* string

The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vm_ip DatabaseMigrationServiceMigrationJob#vm_ip}

---

##### `vmPort`<sup>Optional</sup> <a name="vmPort" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort"></a>

```typescript
public readonly vmPort: number;
```

- *Type:* number

The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vm_port DatabaseMigrationServiceMigrationJob#vm_port}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

The name of the VPC to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}

---

### DatabaseMigrationServiceMigrationJobStaticIpConnectivity <a name="DatabaseMigrationServiceMigrationJobStaticIpConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobStaticIpConnectivity: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity = { ... }
```


### DatabaseMigrationServiceMigrationJobTimeouts <a name="DatabaseMigrationServiceMigrationJobTimeouts" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobTimeouts: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#create DatabaseMigrationServiceMigrationJob#create}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#delete DatabaseMigrationServiceMigrationJob#delete}. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#update DatabaseMigrationServiceMigrationJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#create DatabaseMigrationServiceMigrationJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#delete DatabaseMigrationServiceMigrationJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#update DatabaseMigrationServiceMigrationJob#update}.

---

### DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity <a name="DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

const databaseMigrationServiceMigrationJobVpcPeeringConnectivity: databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc">vpc</a></code> | <code>string</code> | The name of the VPC network to peer with the Cloud SQL private network. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

The name of the VPC network to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/database_migration_service_migration_job#vpc DatabaseMigrationServiceMigrationJob#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get"></a>

```typescript
public get(index: number): DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

---


### DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference <a name="DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>

---


### DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference <a name="DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags"></a>

```typescript
public putDumpFlags(value: IResolvable | DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

---

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags"></a>

```typescript
public resetDumpFlags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags"></a>

```typescript
public readonly dumpFlags: DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a>

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput"></a>

```typescript
public readonly dumpFlagsInput: IResolvable | DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobDumpFlags;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobDumpFlags">DatabaseMigrationServiceMigrationJobDumpFlags</a>

---


### DatabaseMigrationServiceMigrationJobErrorList <a name="DatabaseMigrationServiceMigrationJobErrorList" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get"></a>

```typescript
public get(index: number): DatabaseMigrationServiceMigrationJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseMigrationServiceMigrationJobErrorOutputReference <a name="DatabaseMigrationServiceMigrationJobErrorOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.details">details</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError">DatabaseMigrationServiceMigrationJobError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobError;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobError">DatabaseMigrationServiceMigrationJobError</a>

---


### DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.putSourceObjectsConfig">putSourceObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resetSourceObjectsConfig">resetSourceObjectsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceObjectsConfig` <a name="putSourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.putSourceObjectsConfig"></a>

```typescript
public putSourceObjectsConfig(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.putSourceObjectsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

---

##### `resetSourceObjectsConfig` <a name="resetSourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.resetSourceObjectsConfig"></a>

```typescript
public resetSourceObjectsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfig">sourceObjectsConfig</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfigInput">sourceObjectsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceObjectsConfig`<sup>Required</sup> <a name="sourceObjectsConfig" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfig"></a>

```typescript
public readonly sourceObjectsConfig: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference</a>

---

##### `sourceObjectsConfigInput`<sup>Optional</sup> <a name="sourceObjectsConfigInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.sourceObjectsConfigInput"></a>

```typescript
public readonly sourceObjectsConfigInput: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobObjectsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfig</a>

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.get"></a>

```typescript
public get(index: number): DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>[]

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetTable` <a name="resetTable" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.putObjectIdentifier">putObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectIdentifier` <a name="putObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.putObjectIdentifier"></a>

```typescript
public putObjectIdentifier(value: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.putObjectIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

---

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.resetObjectIdentifier"></a>

```typescript
public resetObjectIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifierOutputReference</a>

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.objectIdentifierInput"></a>

```typescript
public readonly objectIdentifierInput: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsObjectIdentifier</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>

---


### DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.putObjectConfigs">putObjectConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectConfigs">resetObjectConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectsSelectionType">resetObjectsSelectionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectConfigs` <a name="putObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.putObjectConfigs"></a>

```typescript
public putObjectConfigs(value: IResolvable | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.putObjectConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>[]

---

##### `resetObjectConfigs` <a name="resetObjectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectConfigs"></a>

```typescript
public resetObjectConfigs(): void
```

##### `resetObjectsSelectionType` <a name="resetObjectsSelectionType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.resetObjectsSelectionType"></a>

```typescript
public resetObjectsSelectionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigs">objectConfigs</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigsInput">objectConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionTypeInput">objectsSelectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionType">objectsSelectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectConfigs`<sup>Required</sup> <a name="objectConfigs" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigs"></a>

```typescript
public readonly objectConfigs: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigsList</a>

---

##### `objectConfigsInput`<sup>Optional</sup> <a name="objectConfigsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectConfigsInput"></a>

```typescript
public readonly objectConfigsInput: IResolvable | DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigObjectConfigs</a>[]

---

##### `objectsSelectionTypeInput`<sup>Optional</sup> <a name="objectsSelectionTypeInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionTypeInput"></a>

```typescript
public readonly objectsSelectionTypeInput: string;
```

- *Type:* string

---

##### `objectsSelectionType`<sup>Required</sup> <a name="objectsSelectionType" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.objectsSelectionType"></a>

```typescript
public readonly objectsSelectionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig">DatabaseMigrationServiceMigrationJobObjectsConfigSourceObjectsConfig</a>

---


### DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel">resetDumpParallelLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDumpParallelLevel` <a name="resetDumpParallelLevel" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel"></a>

```typescript
public resetDumpParallelLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput">dumpParallelLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dumpParallelLevelInput`<sup>Optional</sup> <a name="dumpParallelLevelInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput"></a>

```typescript
public readonly dumpParallelLevelInput: string;
```

- *Type:* string

---

##### `dumpParallelLevel`<sup>Required</sup> <a name="dumpParallelLevel" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel"></a>

```typescript
public readonly dumpParallelLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobPerformanceConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPerformanceConfig">DatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---


### DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference <a name="DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resetMaxAdditionalSubscriptions">resetMaxAdditionalSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAdditionalSubscriptions` <a name="resetMaxAdditionalSubscriptions" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.resetMaxAdditionalSubscriptions"></a>

```typescript
public resetMaxAdditionalSubscriptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogicalInput">isNativeLogicalInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptionsInput">maxAdditionalSubscriptionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogical">isNativeLogical</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptions">maxAdditionalSubscriptions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isNativeLogicalInput`<sup>Optional</sup> <a name="isNativeLogicalInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogicalInput"></a>

```typescript
public readonly isNativeLogicalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxAdditionalSubscriptionsInput`<sup>Optional</sup> <a name="maxAdditionalSubscriptionsInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptionsInput"></a>

```typescript
public readonly maxAdditionalSubscriptionsInput: number;
```

- *Type:* number

---

##### `isNativeLogical`<sup>Required</sup> <a name="isNativeLogical" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.isNativeLogical"></a>

```typescript
public readonly isNativeLogical: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxAdditionalSubscriptions`<sup>Required</sup> <a name="maxAdditionalSubscriptions" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.maxAdditionalSubscriptions"></a>

```typescript
public readonly maxAdditionalSubscriptions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig">DatabaseMigrationServiceMigrationJobPostgresHomogeneousConfig</a>

---


### DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm">resetVm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp">resetVmIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort">resetVmPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVm` <a name="resetVm" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm"></a>

```typescript
public resetVm(): void
```

##### `resetVmIp` <a name="resetVmIp" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp"></a>

```typescript
public resetVmIp(): void
```

##### `resetVmPort` <a name="resetVmPort" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort"></a>

```typescript
public resetVmPort(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc"></a>

```typescript
public resetVpc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput">vmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput">vmIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput">vmPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm">vm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp">vmIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort">vmPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vmInput`<sup>Optional</sup> <a name="vmInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput"></a>

```typescript
public readonly vmInput: string;
```

- *Type:* string

---

##### `vmIpInput`<sup>Optional</sup> <a name="vmIpInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput"></a>

```typescript
public readonly vmIpInput: string;
```

- *Type:* string

---

##### `vmPortInput`<sup>Optional</sup> <a name="vmPortInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput"></a>

```typescript
public readonly vmPortInput: number;
```

- *Type:* number

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `vm`<sup>Required</sup> <a name="vm" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm"></a>

```typescript
public readonly vm: string;
```

- *Type:* string

---

##### `vmIp`<sup>Required</sup> <a name="vmIp" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp"></a>

```typescript
public readonly vmIp: string;
```

- *Type:* string

---

##### `vmPort`<sup>Required</sup> <a name="vmPort" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort"></a>

```typescript
public readonly vmPort: number;
```

- *Type:* number

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobReverseSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobReverseSshConnectivity">DatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---


### DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobStaticIpConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobStaticIpConnectivity">DatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---


### DatabaseMigrationServiceMigrationJobTimeoutsOutputReference <a name="DatabaseMigrationServiceMigrationJobTimeoutsOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationServiceMigrationJobTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobTimeouts">DatabaseMigrationServiceMigrationJobTimeouts</a>

---


### DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference <a name="DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServiceMigrationJob } from '@cdktn/provider-google'

new databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc"></a>

```typescript
public resetVpc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.databaseMigrationServiceMigrationJob.DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">DatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---



