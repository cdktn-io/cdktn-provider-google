# `oracleDatabaseExascaleDbStorageVault` Submodule <a name="`oracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseExascaleDbStorageVault <a name="OracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault(scope: Construct, id: string, config: OracleDatabaseExascaleDbStorageVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig">OracleDatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig">OracleDatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetExadataInfrastructure">resetExadataInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties"></a>

```typescript
public putProperties(value: OracleDatabaseExascaleDbStorageVaultProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseExascaleDbStorageVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetExadataInfrastructure` <a name="resetExadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetExadataInfrastructure"></a>

```typescript
public resetExadataInfrastructure(): void
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetGcpOracleZone"></a>

```typescript
public resetGcpOracleZone(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructureInput">exadataInfrastructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `exadataInfrastructureInput`<sup>Optional</sup> <a name="exadataInfrastructureInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructureInput"></a>

```typescript
public readonly exadataInfrastructureInput: string;
```

- *Type:* string

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```typescript
public readonly exascaleDbStorageVaultIdInput: string;
```

- *Type:* string

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput"></a>

```typescript
public readonly gcpOracleZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: OracleDatabaseExascaleDbStorageVaultProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseExascaleDbStorageVaultTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructure`<sup>Required</sup> <a name="exadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure"></a>

```typescript
public readonly exadataInfrastructure: string;
```

- *Type:* string

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseExascaleDbStorageVaultConfig <a name="OracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const oracleDatabaseExascaleDbStorageVaultConfig: oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>string</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>string</code> | The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created. In the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#display_name OracleDatabaseExascaleDbStorageVault#display_name}

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```typescript
public readonly exascaleDbStorageVaultId: string;
```

- *Type:* string

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id OracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#location OracleDatabaseExascaleDbStorageVault#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseExascaleDbStorageVaultProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#properties OracleDatabaseExascaleDbStorageVault#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_policy OracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_protection OracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `exadataInfrastructure`<sup>Optional</sup> <a name="exadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exadataInfrastructure"></a>

```typescript
public readonly exadataInfrastructure: string;
```

- *Type:* string

The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created. In the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#exadata_infrastructure OracleDatabaseExascaleDbStorageVault#exadata_infrastructure}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#gcp_oracle_zone OracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#labels OracleDatabaseExascaleDbStorageVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseExascaleDbStorageVaultTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#timeouts OracleDatabaseExascaleDbStorageVault#timeouts}

---

### OracleDatabaseExascaleDbStorageVaultProperties <a name="OracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const oracleDatabaseExascaleDbStorageVaultProperties: oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | exascale_db_storage_details block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>number</code> | The size of additional flash cache in percentage of high capacity database storage. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | time_zone block. |

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails"></a>

```typescript
public readonly exascaleDbStorageDetails: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

exascale_db_storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_details OracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}

---

##### `additionalFlashCachePercent`<sup>Optional</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent"></a>

```typescript
public readonly additionalFlashCachePercent: number;
```

- *Type:* number

The size of additional flash cache in percentage of high capacity database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#additional_flash_cache_percent OracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.timeZone"></a>

```typescript
public readonly timeZone: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#time_zone OracleDatabaseExascaleDbStorageVault#time_zone}

---

### OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const oracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails: oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs">totalSizeGbs</a></code> | <code>number</code> | The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). |

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs"></a>

```typescript
public readonly totalSizeGbs: number;
```

- *Type:* number

The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#total_size_gbs OracleDatabaseExascaleDbStorageVault#total_size_gbs}

---

### OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const oracleDatabaseExascaleDbStorageVaultPropertiesTimeZone: oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id">id</a></code> | <code>string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version">version</a></code> | <code>string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#version OracleDatabaseExascaleDbStorageVault#version}

---

### OracleDatabaseExascaleDbStorageVaultTimeouts <a name="OracleDatabaseExascaleDbStorageVaultTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

const oracleDatabaseExascaleDbStorageVaultTimeouts: oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#create OracleDatabaseExascaleDbStorageVault#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#delete OracleDatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#update OracleDatabaseExascaleDbStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#create OracleDatabaseExascaleDbStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#delete OracleDatabaseExascaleDbStorageVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exascale_db_storage_vault#update OracleDatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">availableSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput">totalSizeGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">totalSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableSizeGbs`<sup>Required</sup> <a name="availableSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```typescript
public readonly availableSizeGbs: number;
```

- *Type:* number

---

##### `totalSizeGbsInput`<sup>Optional</sup> <a name="totalSizeGbsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput"></a>

```typescript
public readonly totalSizeGbsInput: number;
```

- *Type:* number

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```typescript
public readonly totalSizeGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails">putExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent">resetAdditionalFlashCachePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExascaleDbStorageDetails` <a name="putExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails"></a>

```typescript
public putExascaleDbStorageDetails(value: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone"></a>

```typescript
public putTimeZone(value: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `resetAdditionalFlashCachePercent` <a name="resetAdditionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent"></a>

```typescript
public resetAdditionalFlashCachePercent(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">attachedShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">availableShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">ociUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">vmClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput">additionalFlashCachePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput">exascaleDbStorageDetailsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachedShapeAttributes`<sup>Required</sup> <a name="attachedShapeAttributes" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```typescript
public readonly attachedShapeAttributes: string[];
```

- *Type:* string[]

---

##### `availableShapeAttributes`<sup>Required</sup> <a name="availableShapeAttributes" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```typescript
public readonly availableShapeAttributes: string[];
```

- *Type:* string[]

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```typescript
public readonly exascaleDbStorageDetails: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUri`<sup>Required</sup> <a name="ociUri" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```typescript
public readonly ociUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a>

---

##### `vmClusterCount`<sup>Required</sup> <a name="vmClusterCount" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```typescript
public readonly vmClusterCount: number;
```

- *Type:* number

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```typescript
public readonly vmClusterIds: string[];
```

- *Type:* string[]

---

##### `additionalFlashCachePercentInput`<sup>Optional</sup> <a name="additionalFlashCachePercentInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput"></a>

```typescript
public readonly additionalFlashCachePercentInput: number;
```

- *Type:* number

---

##### `exascaleDbStorageDetailsInput`<sup>Optional</sup> <a name="exascaleDbStorageDetailsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput"></a>

```typescript
public readonly exascaleDbStorageDetailsInput: OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `additionalFlashCachePercent`<sup>Required</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```typescript
public readonly additionalFlashCachePercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseExascaleDbStorageVaultProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---


### OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---


### OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseExascaleDbStorageVault } from '@cdktn/provider-google'

new oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseExascaleDbStorageVaultTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---



