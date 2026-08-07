# `datastreamConnectionProfile` Submodule <a name="`datastreamConnectionProfile` Submodule" id="@cdktn/provider-google.datastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamConnectionProfile <a name="DatastreamConnectionProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfile(scope: Construct, id: string, config: DatastreamConnectionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig">DatastreamConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile">putBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity">putForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile">putGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile">putMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile">putMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile">putOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile">putPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity">putPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile">putSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile">resetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetCreateWithoutValidation">resetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity">resetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile">resetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMongodbProfile">resetMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile">resetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile">resetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile">resetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity">resetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetSqlServerProfile">resetSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryProfile` <a name="putBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile"></a>

```typescript
public putBigqueryProfile(value: DatastreamConnectionProfileBigqueryProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `putForwardSshConnectivity` <a name="putForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity"></a>

```typescript
public putForwardSshConnectivity(value: DatastreamConnectionProfileForwardSshConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `putGcsProfile` <a name="putGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile"></a>

```typescript
public putGcsProfile(value: DatastreamConnectionProfileGcsProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `putMongodbProfile` <a name="putMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile"></a>

```typescript
public putMongodbProfile(value: DatastreamConnectionProfileMongodbProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---

##### `putMysqlProfile` <a name="putMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile"></a>

```typescript
public putMysqlProfile(value: DatastreamConnectionProfileMysqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `putOracleProfile` <a name="putOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile"></a>

```typescript
public putOracleProfile(value: DatastreamConnectionProfileOracleProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `putPostgresqlProfile` <a name="putPostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile"></a>

```typescript
public putPostgresqlProfile(value: DatastreamConnectionProfilePostgresqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `putPrivateConnectivity` <a name="putPrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity"></a>

```typescript
public putPrivateConnectivity(value: DatastreamConnectionProfilePrivateConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `putSqlServerProfile` <a name="putSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile"></a>

```typescript
public putSqlServerProfile(value: DatastreamConnectionProfileSqlServerProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: DatastreamConnectionProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `resetBigqueryProfile` <a name="resetBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile"></a>

```typescript
public resetBigqueryProfile(): void
```

##### `resetCreateWithoutValidation` <a name="resetCreateWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetCreateWithoutValidation"></a>

```typescript
public resetCreateWithoutValidation(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetForwardSshConnectivity` <a name="resetForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```typescript
public resetForwardSshConnectivity(): void
```

##### `resetGcsProfile` <a name="resetGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile"></a>

```typescript
public resetGcsProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMongodbProfile` <a name="resetMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMongodbProfile"></a>

```typescript
public resetMongodbProfile(): void
```

##### `resetMysqlProfile` <a name="resetMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile"></a>

```typescript
public resetMysqlProfile(): void
```

##### `resetOracleProfile` <a name="resetOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile"></a>

```typescript
public resetOracleProfile(): void
```

##### `resetPostgresqlProfile` <a name="resetPostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile"></a>

```typescript
public resetPostgresqlProfile(): void
```

##### `resetPrivateConnectivity` <a name="resetPrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity"></a>

```typescript
public resetPrivateConnectivity(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSqlServerProfile` <a name="resetSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetSqlServerProfile"></a>

```typescript
public resetSqlServerProfile(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatastreamConnectionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatastreamConnectionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatastreamConnectionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfile">mongodbProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference">DatastreamConnectionProfileMongodbProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference">DatastreamConnectionProfileSqlServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput">bigqueryProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput">connectionProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidationInput">createWithoutValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput">forwardSshConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput">gcsProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfileInput">mongodbProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput">mysqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput">oracleProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput">postgresqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput">privateConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfileInput">sqlServerProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bigqueryProfile`<sup>Required</sup> <a name="bigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: DatastreamConnectionProfileBigqueryProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `forwardSshConnectivity`<sup>Required</sup> <a name="forwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: DatastreamConnectionProfileForwardSshConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcsProfile`<sup>Required</sup> <a name="gcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: DatastreamConnectionProfileGcsProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mongodbProfile`<sup>Required</sup> <a name="mongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfile"></a>

```typescript
public readonly mongodbProfile: DatastreamConnectionProfileMongodbProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference">DatastreamConnectionProfileMongodbProfileOutputReference</a>

---

##### `mysqlProfile`<sup>Required</sup> <a name="mysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: DatastreamConnectionProfileMysqlProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oracleProfile`<sup>Required</sup> <a name="oracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: DatastreamConnectionProfileOracleProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresqlProfile`<sup>Required</sup> <a name="postgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: DatastreamConnectionProfilePostgresqlProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `privateConnectivity`<sup>Required</sup> <a name="privateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: DatastreamConnectionProfilePrivateConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `sqlServerProfile`<sup>Required</sup> <a name="sqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfile"></a>

```typescript
public readonly sqlServerProfile: DatastreamConnectionProfileSqlServerProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference">DatastreamConnectionProfileSqlServerProfileOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts"></a>

```typescript
public readonly timeouts: DatastreamConnectionProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigqueryProfileInput`<sup>Optional</sup> <a name="bigqueryProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```typescript
public readonly bigqueryProfileInput: DatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `connectionProfileIdInput`<sup>Optional</sup> <a name="connectionProfileIdInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```typescript
public readonly connectionProfileIdInput: string;
```

- *Type:* string

---

##### `createWithoutValidationInput`<sup>Optional</sup> <a name="createWithoutValidationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidationInput"></a>

```typescript
public readonly createWithoutValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `forwardSshConnectivityInput`<sup>Optional</sup> <a name="forwardSshConnectivityInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```typescript
public readonly forwardSshConnectivityInput: DatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcsProfileInput`<sup>Optional</sup> <a name="gcsProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput"></a>

```typescript
public readonly gcsProfileInput: DatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mongodbProfileInput`<sup>Optional</sup> <a name="mongodbProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfileInput"></a>

```typescript
public readonly mongodbProfileInput: DatastreamConnectionProfileMongodbProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---

##### `mysqlProfileInput`<sup>Optional</sup> <a name="mysqlProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput"></a>

```typescript
public readonly mysqlProfileInput: DatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `oracleProfileInput`<sup>Optional</sup> <a name="oracleProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput"></a>

```typescript
public readonly oracleProfileInput: DatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `postgresqlProfileInput`<sup>Optional</sup> <a name="postgresqlProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```typescript
public readonly postgresqlProfileInput: DatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `privateConnectivityInput`<sup>Optional</sup> <a name="privateConnectivityInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput"></a>

```typescript
public readonly privateConnectivityInput: DatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sqlServerProfileInput`<sup>Optional</sup> <a name="sqlServerProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfileInput"></a>

```typescript
public readonly sqlServerProfileInput: DatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatastreamConnectionProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

---

##### `createWithoutValidation`<sup>Required</sup> <a name="createWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamConnectionProfileBigqueryProfile <a name="DatastreamConnectionProfileBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileBigqueryProfile: datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile = { ... }
```


### DatastreamConnectionProfileConfig <a name="DatastreamConnectionProfileConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileConfig: datastreamConnectionProfile.DatastreamConnectionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | The connection profile identifier. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location">location</a></code> | <code>string</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mongodbProfile">mongodbProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | mongodb_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `bigqueryProfile`<sup>Optional</sup> <a name="bigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: DatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `createWithoutValidation`<sup>Optional</sup> <a name="createWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#create_without_validation DatastreamConnectionProfile#create_without_validation}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#deletion_policy DatastreamConnectionProfile#deletion_policy}

---

##### `forwardSshConnectivity`<sup>Optional</sup> <a name="forwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: DatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcsProfile`<sup>Optional</sup> <a name="gcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: DatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `mongodbProfile`<sup>Optional</sup> <a name="mongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mongodbProfile"></a>

```typescript
public readonly mongodbProfile: DatastreamConnectionProfileMongodbProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

mongodb_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#mongodb_profile DatastreamConnectionProfile#mongodb_profile}

---

##### `mysqlProfile`<sup>Optional</sup> <a name="mysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: DatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `oracleProfile`<sup>Optional</sup> <a name="oracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: DatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `postgresqlProfile`<sup>Optional</sup> <a name="postgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: DatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `privateConnectivity`<sup>Optional</sup> <a name="privateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: DatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `sqlServerProfile`<sup>Optional</sup> <a name="sqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.sqlServerProfile"></a>

```typescript
public readonly sqlServerProfile: DatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#sql_server_profile DatastreamConnectionProfile#sql_server_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatastreamConnectionProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

### DatastreamConnectionProfileForwardSshConnectivity <a name="DatastreamConnectionProfileForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileForwardSshConnectivity: datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>string</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>string</code> | SSH password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>number</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey">privateKey</a></code> | <code>string</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}

---

### DatastreamConnectionProfileGcsProfile <a name="DatastreamConnectionProfileGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileGcsProfile: datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath">rootPath</a></code> | <code>string</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}

---

##### `rootPath`<sup>Optional</sup> <a name="rootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}

---

### DatastreamConnectionProfileMongodbProfile <a name="DatastreamConnectionProfileMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileMongodbProfile: datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.hostAddresses">hostAddresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>[]</code> | host_addresses block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.username">username</a></code> | <code>string</code> | Username for the MongoDB connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.additionalOptions">additionalOptions</a></code> | <code>{[ key: string ]: string}</code> | A map of additional options for the MongoDB connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.password">password</a></code> | <code>string</code> | Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.replicaSet">replicaSet</a></code> | <code>string</code> | Name of the replica set. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat">srvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | srv_connection_format block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | ssl_config block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat">standardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | standard_connection_format block. |

---

##### `hostAddresses`<sup>Required</sup> <a name="hostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.hostAddresses"></a>

```typescript
public readonly hostAddresses: IResolvable | DatastreamConnectionProfileMongodbProfileHostAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

host_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#host_addresses DatastreamConnectionProfile#host_addresses}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the MongoDB connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `additionalOptions`<sup>Optional</sup> <a name="additionalOptions" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.additionalOptions"></a>

```typescript
public readonly additionalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of additional options for the MongoDB connection.

Keys are case-sensitive and should match the official
MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#additional_options DatastreamConnectionProfile#additional_options}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `replicaSet`<sup>Optional</sup> <a name="replicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.replicaSet"></a>

```typescript
public readonly replicaSet: string;
```

- *Type:* string

Name of the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#replica_set DatastreamConnectionProfile#replica_set}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `srvConnectionFormat`<sup>Optional</sup> <a name="srvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat"></a>

```typescript
public readonly srvConnectionFormat: DatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

srv_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#srv_connection_format DatastreamConnectionProfile#srv_connection_format}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfileMongodbProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

##### `standardConnectionFormat`<sup>Optional</sup> <a name="standardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat"></a>

```typescript
public readonly standardConnectionFormat: DatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

standard_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#standard_connection_format DatastreamConnectionProfile#standard_connection_format}

---

### DatastreamConnectionProfileMongodbProfileHostAddresses <a name="DatastreamConnectionProfileMongodbProfileHostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileMongodbProfileHostAddresses: datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.port">port</a></code> | <code>number</code> | Port for the connection. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfileMongodbProfileSrvConnectionFormat <a name="DatastreamConnectionProfileMongodbProfileSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileMongodbProfileSrvConnectionFormat: datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat = { ... }
```


### DatastreamConnectionProfileMongodbProfileSslConfig <a name="DatastreamConnectionProfileMongodbProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileMongodbProfileSslConfig: datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the Client Certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey">secretManagerStoredClientKey</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

##### `secretManagerStoredClientKey`<sup>Optional</sup> <a name="secretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey"></a>

```typescript
public readonly secretManagerStoredClientKey: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#secret_manager_stored_client_key DatastreamConnectionProfile#secret_manager_stored_client_key}

---

### DatastreamConnectionProfileMongodbProfileStandardConnectionFormat <a name="DatastreamConnectionProfileMongodbProfileStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileMongodbProfileStandardConnectionFormat: datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection">directConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the client connects directly to the host[:port] in the connection URI. |

---

##### `directConnection`<sup>Optional</sup> <a name="directConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection"></a>

```typescript
public readonly directConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the client connects directly to the host[:port] in the connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#direct_connection DatastreamConnectionProfile#direct_connection}

---

### DatastreamConnectionProfileMysqlProfile <a name="DatastreamConnectionProfileMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileMysqlProfile: datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>string</code> | Username for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>string</code> | Password for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>number</code> | Port for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfileMysqlProfileSslConfig <a name="DatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileMysqlProfileSslConfig: datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfileOracleProfile <a name="DatastreamConnectionProfileOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileOracleProfile: datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService">databaseService</a></code> | <code>string</code> | Database for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>string</code> | Username for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | Connection string attributes. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>string</code> | Password for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>number</code> | Port for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `connectionAttributes`<sup>Optional</sup> <a name="connectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

### DatastreamConnectionProfilePostgresqlProfile <a name="DatastreamConnectionProfilePostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfilePostgresqlProfile: datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>string</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>string</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>string</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>number</code> | Port for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfilePostgresqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfig <a name="DatastreamConnectionProfilePostgresqlProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfilePostgresqlProfileSslConfig: datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification">serverAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | server_and_client_verification block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification">serverVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | server_verification block. |

---

##### `serverAndClientVerification`<sup>Optional</sup> <a name="serverAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification"></a>

```typescript
public readonly serverAndClientVerification: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

server_and_client_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#server_and_client_verification DatastreamConnectionProfile#server_and_client_verification}

---

##### `serverVerification`<sup>Optional</sup> <a name="serverVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification"></a>

```typescript
public readonly serverVerification: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

server_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#server_verification DatastreamConnectionProfile#server_verification}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification: datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded server root CA certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the client certificate. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the client certificate.

This value will be used during the SSL/TLS handshake, allowing
the PostgreSQL server to authenticate the client's identity,
i.e. identity of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfilePostgresqlProfileSslConfigServerVerification: datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded server root CA certificate. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

### DatastreamConnectionProfilePrivateConnectivity <a name="DatastreamConnectionProfilePrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfilePrivateConnectivity: datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection">privateConnection</a></code> | <code>string</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}

---

### DatastreamConnectionProfileSqlServerProfile <a name="DatastreamConnectionProfileSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileSqlServerProfile: datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.database">database</a></code> | <code>string</code> | Database for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.username">username</a></code> | <code>string</code> | Username for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.password">password</a></code> | <code>string</code> | Password for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.port">port</a></code> | <code>number</code> | Port for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

### DatastreamConnectionProfileTimeouts <a name="DatastreamConnectionProfileTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

const datastreamConnectionProfileTimeouts: datastreamConnectionProfile.DatastreamConnectionProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamConnectionProfileBigqueryProfileOutputReference <a name="DatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---


### DatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="DatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---


### DatastreamConnectionProfileGcsProfileOutputReference <a name="DatastreamConnectionProfileGcsProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">resetRootPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootPath` <a name="resetRootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```typescript
public resetRootPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">rootPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">rootPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `rootPathInput`<sup>Optional</sup> <a name="rootPathInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```typescript
public readonly rootPathInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `rootPath`<sup>Required</sup> <a name="rootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---


### DatastreamConnectionProfileMongodbProfileHostAddressesList <a name="DatastreamConnectionProfileMongodbProfileHostAddressesList" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get"></a>

```typescript
public get(index: number): DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatastreamConnectionProfileMongodbProfileHostAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

---


### DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference <a name="DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatastreamConnectionProfileMongodbProfileHostAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>

---


### DatastreamConnectionProfileMongodbProfileOutputReference <a name="DatastreamConnectionProfileMongodbProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses">putHostAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat">putSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat">putStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetAdditionalOptions">resetAdditionalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet">resetReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat">resetSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat">resetStandardConnectionFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostAddresses` <a name="putHostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses"></a>

```typescript
public putHostAddresses(value: IResolvable | DatastreamConnectionProfileMongodbProfileHostAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

---

##### `putSrvConnectionFormat` <a name="putSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat"></a>

```typescript
public putSrvConnectionFormat(value: DatastreamConnectionProfileMongodbProfileSrvConnectionFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: DatastreamConnectionProfileMongodbProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `putStandardConnectionFormat` <a name="putStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat"></a>

```typescript
public putStandardConnectionFormat(value: DatastreamConnectionProfileMongodbProfileStandardConnectionFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `resetAdditionalOptions` <a name="resetAdditionalOptions" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetAdditionalOptions"></a>

```typescript
public resetAdditionalOptions(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetReplicaSet` <a name="resetReplicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet"></a>

```typescript
public resetReplicaSet(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```

##### `resetSrvConnectionFormat` <a name="resetSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat"></a>

```typescript
public resetSrvConnectionFormat(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```

##### `resetStandardConnectionFormat` <a name="resetStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat"></a>

```typescript
public resetStandardConnectionFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses">hostAddresses</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList">DatastreamConnectionProfileMongodbProfileHostAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat">srvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference">DatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat">standardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptionsInput">additionalOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput">hostAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput">replicaSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput">srvConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput">standardConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptions">additionalOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet">replicaSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostAddresses`<sup>Required</sup> <a name="hostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses"></a>

```typescript
public readonly hostAddresses: DatastreamConnectionProfileMongodbProfileHostAddressesList;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList">DatastreamConnectionProfileMongodbProfileHostAddressesList</a>

---

##### `srvConnectionFormat`<sup>Required</sup> <a name="srvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat"></a>

```typescript
public readonly srvConnectionFormat: DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a>

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfileMongodbProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference">DatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a>

---

##### `standardConnectionFormat`<sup>Required</sup> <a name="standardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat"></a>

```typescript
public readonly standardConnectionFormat: DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a>

---

##### `additionalOptionsInput`<sup>Optional</sup> <a name="additionalOptionsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptionsInput"></a>

```typescript
public readonly additionalOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostAddressesInput`<sup>Optional</sup> <a name="hostAddressesInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput"></a>

```typescript
public readonly hostAddressesInput: IResolvable | DatastreamConnectionProfileMongodbProfileHostAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `replicaSetInput`<sup>Optional</sup> <a name="replicaSetInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput"></a>

```typescript
public readonly replicaSetInput: string;
```

- *Type:* string

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `srvConnectionFormatInput`<sup>Optional</sup> <a name="srvConnectionFormatInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput"></a>

```typescript
public readonly srvConnectionFormatInput: DatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: DatastreamConnectionProfileMongodbProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `standardConnectionFormatInput`<sup>Optional</sup> <a name="standardConnectionFormatInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput"></a>

```typescript
public readonly standardConnectionFormatInput: DatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `additionalOptions`<sup>Required</sup> <a name="additionalOptions" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.additionalOptions"></a>

```typescript
public readonly additionalOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `replicaSet`<sup>Required</sup> <a name="replicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet"></a>

```typescript
public readonly replicaSet: string;
```

- *Type:* string

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMongodbProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---


### DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference <a name="DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---


### DatastreamConnectionProfileMongodbProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMongodbProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey">resetSecretManagerStoredClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetSecretManagerStoredClientKey` <a name="resetSecretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey"></a>

```typescript
public resetSecretManagerStoredClientKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput">secretManagerStoredClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey">secretManagerStoredClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet"></a>

```typescript
public readonly caCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```typescript
public readonly clientCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet"></a>

```typescript
public readonly clientKeySet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `secretManagerStoredClientKeyInput`<sup>Optional</sup> <a name="secretManagerStoredClientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput"></a>

```typescript
public readonly secretManagerStoredClientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `secretManagerStoredClientKey`<sup>Required</sup> <a name="secretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey"></a>

```typescript
public readonly secretManagerStoredClientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMongodbProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---


### DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference <a name="DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection">resetDirectConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectConnection` <a name="resetDirectConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection"></a>

```typescript
public resetDirectConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput">directConnectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection">directConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directConnectionInput`<sup>Optional</sup> <a name="directConnectionInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput"></a>

```typescript
public readonly directConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `directConnection`<sup>Required</sup> <a name="directConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection"></a>

```typescript
public readonly directConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---


### DatastreamConnectionProfileMysqlProfileOutputReference <a name="DatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: DatastreamConnectionProfileMysqlProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfileMysqlProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: DatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---


### DatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```typescript
public readonly caCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```typescript
public readonly clientCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```typescript
public readonly clientKeySet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### DatastreamConnectionProfileOracleProfileOutputReference <a name="DatastreamConnectionProfileOracleProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">resetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionAttributes` <a name="resetConnectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```typescript
public resetConnectionAttributes(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connectionAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">databaseServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">databaseService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionAttributesInput`<sup>Optional</sup> <a name="connectionAttributesInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```typescript
public readonly connectionAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseServiceInput`<sup>Optional</sup> <a name="databaseServiceInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```typescript
public readonly databaseServiceInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `connectionAttributes`<sup>Required</sup> <a name="connectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: DatastreamConnectionProfilePostgresqlProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: DatastreamConnectionProfilePostgresqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification">putServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification">putServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification">resetServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification">resetServerVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerAndClientVerification` <a name="putServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification"></a>

```typescript
public putServerAndClientVerification(value: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `putServerVerification` <a name="putServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification"></a>

```typescript
public putServerVerification(value: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `resetServerAndClientVerification` <a name="resetServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification"></a>

```typescript
public resetServerAndClientVerification(): void
```

##### `resetServerVerification` <a name="resetServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification"></a>

```typescript
public resetServerVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification">serverAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification">serverVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput">serverAndClientVerificationInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput">serverVerificationInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverAndClientVerification`<sup>Required</sup> <a name="serverAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification"></a>

```typescript
public readonly serverAndClientVerification: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a>

---

##### `serverVerification`<sup>Required</sup> <a name="serverVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification"></a>

```typescript
public readonly serverVerification: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a>

---

##### `serverAndClientVerificationInput`<sup>Optional</sup> <a name="serverAndClientVerificationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput"></a>

```typescript
public readonly serverAndClientVerificationInput: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `serverVerificationInput`<sup>Optional</sup> <a name="serverVerificationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput"></a>

```typescript
public readonly serverVerificationInput: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfilePostgresqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---


### DatastreamConnectionProfilePrivateConnectivityOutputReference <a name="DatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">privateConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">privateConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateConnectionInput`<sup>Optional</sup> <a name="privateConnectionInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```typescript
public readonly privateConnectionInput: string;
```

- *Type:* string

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---


### DatastreamConnectionProfileSqlServerProfileOutputReference <a name="DatastreamConnectionProfileSqlServerProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---


### DatastreamConnectionProfileTimeoutsOutputReference <a name="DatastreamConnectionProfileTimeoutsOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { datastreamConnectionProfile } from '@cdktn/provider-google'

new datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatastreamConnectionProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---



