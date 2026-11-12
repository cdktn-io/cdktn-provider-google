# `dataGoogleOracleDatabaseOdbDnsZone` Submodule <a name="`dataGoogleOracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseOdbDnsZone <a name="DataGoogleOracleDatabaseOdbDnsZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone(scope: Construct, id: string, config: DataGoogleOracleDatabaseOdbDnsZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig">DataGoogleOracleDatabaseOdbDnsZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig">DataGoogleOracleDatabaseOdbDnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseOdbDnsZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">odbDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput">odbnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId">odbDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork">odbnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `odbDnsZoneIdInput`<sup>Optional</sup> <a name="odbDnsZoneIdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```typescript
public readonly odbDnsZoneIdInput: string;
```

- *Type:* string

---

##### `odbnetworkInput`<sup>Optional</sup> <a name="odbnetworkInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```typescript
public readonly odbnetworkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `odbDnsZoneId`<sup>Required</sup> <a name="odbDnsZoneId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```typescript
public readonly odbDnsZoneId: string;
```

- *Type:* string

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```typescript
public readonly odbnetwork: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseOdbDnsZoneConfig <a name="DataGoogleOracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseOdbDnsZoneConfig: dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">odbDnsZoneId</a></code> | <code>string</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork">odbnetwork</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `odbDnsZoneId`<sup>Required</sup> <a name="odbDnsZoneId" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```typescript
public readonly odbDnsZoneId: string;
```

- *Type:* string

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odb_dns_zone_id DataGoogleOracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```typescript
public readonly odbnetwork: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#odbnetwork DataGoogleOracleDatabaseOdbDnsZone#odbnetwork}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#id DataGoogleOracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#location DataGoogleOracleDatabaseOdbDnsZone#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseOdbDnsZone.DataGoogleOracleDatabaseOdbDnsZoneConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/oracle_database_odb_dns_zone#project DataGoogleOracleDatabaseOdbDnsZone#project}.

---



