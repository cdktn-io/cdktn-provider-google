# `oracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule <a name="`oracleDatabaseCloudExadataInfrastructureExascaleConfig` Submodule" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudExadataInfrastructureExascaleConfig <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfig" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config google_oracle_database_cloud_exadata_infrastructure_exascale_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

new oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig(scope: Construct, id: string, config: OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig">OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig">OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OracleDatabaseCloudExadataInfrastructureExascaleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseCloudExadataInfrastructureExascaleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseCloudExadataInfrastructureExascaleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudExadataInfrastructureExascaleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput">cloudExadataInfrastructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput">totalStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure">cloudExadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb">totalStorageSizeGb</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference</a>

---

##### `cloudExadataInfrastructureInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructureInput"></a>

```typescript
public readonly cloudExadataInfrastructureInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---

##### `totalStorageSizeGbInput`<sup>Optional</sup> <a name="totalStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGbInput"></a>

```typescript
public readonly totalStorageSizeGbInput: number;
```

- *Type:* number

---

##### `cloudExadataInfrastructure`<sup>Required</sup> <a name="cloudExadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.cloudExadataInfrastructure"></a>

```typescript
public readonly cloudExadataInfrastructure: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `totalStorageSizeGb`<sup>Required</sup> <a name="totalStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.totalStorageSizeGb"></a>

```typescript
public readonly totalStorageSizeGb: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

const oracleDatabaseCloudExadataInfrastructureExascaleConfigConfig: oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure">cloudExadataInfrastructure</a></code> | <code>string</code> | A reference to CloudExadataInfrastructure resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#location OracleDatabaseCloudExadataInfrastructureExascaleConfig#location}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb">totalStorageSizeGb</a></code> | <code>number</code> | The total storage to be allocated to Exascale in GBs. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#id OracleDatabaseCloudExadataInfrastructureExascaleConfig#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#project OracleDatabaseCloudExadataInfrastructureExascaleConfig#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudExadataInfrastructure`<sup>Required</sup> <a name="cloudExadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.cloudExadataInfrastructure"></a>

```typescript
public readonly cloudExadataInfrastructure: string;
```

- *Type:* string

A reference to CloudExadataInfrastructure resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#cloud_exadata_infrastructure OracleDatabaseCloudExadataInfrastructureExascaleConfig#cloud_exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#location OracleDatabaseCloudExadataInfrastructureExascaleConfig#location}.

---

##### `totalStorageSizeGb`<sup>Required</sup> <a name="totalStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.totalStorageSizeGb"></a>

```typescript
public readonly totalStorageSizeGb: number;
```

- *Type:* number

The total storage to be allocated to Exascale in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#total_storage_size_gb OracleDatabaseCloudExadataInfrastructureExascaleConfig#total_storage_size_gb}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#deletion_policy OracleDatabaseCloudExadataInfrastructureExascaleConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#id OracleDatabaseCloudExadataInfrastructureExascaleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#project OracleDatabaseCloudExadataInfrastructureExascaleConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#timeouts OracleDatabaseCloudExadataInfrastructureExascaleConfig#timeouts}

---

### OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

const oracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts: oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#create OracleDatabaseCloudExadataInfrastructureExascaleConfig#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#delete OracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#create OracleDatabaseCloudExadataInfrastructureExascaleConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/oracle_database_cloud_exadata_infrastructure_exascale_config#delete OracleDatabaseCloudExadataInfrastructureExascaleConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference <a name="OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudExadataInfrastructureExascaleConfig } from '@cdktn/provider-google'

new oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseCloudExadataInfrastructureExascaleConfig.OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts">OracleDatabaseCloudExadataInfrastructureExascaleConfigTimeouts</a>

---



