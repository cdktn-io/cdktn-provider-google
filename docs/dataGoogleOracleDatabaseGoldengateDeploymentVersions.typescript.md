# `dataGoogleOracleDatabaseGoldengateDeploymentVersions` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentVersions` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersions <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_versions google_oracle_database_goldengate_deployment_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions(scope: Construct, id: string, config: DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig">DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig">DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentVersions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.goldengateDeploymentVersions">goldengateDeploymentVersions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `goldengateDeploymentVersions`<sup>Required</sup> <a name="goldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.goldengateDeploymentVersions"></a>

```typescript
public readonly goldengateDeploymentVersions: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig: dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_versions#location DataGoogleOracleDatabaseGoldengateDeploymentVersions#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_versions#project DataGoogleOracleDatabaseGoldengateDeploymentVersions#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions: dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions = { ... }
```


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

const dataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties: dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions</a>

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseGoldengateDeploymentVersions } from '@cdktn/provider-google'

new dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.oggVersion">oggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseTime">releaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseType">releaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.securityFix">securityFix</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.supportEndTime">supportEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.oggVersion"></a>

```typescript
public readonly oggVersion: string;
```

- *Type:* string

---

##### `releaseTime`<sup>Required</sup> <a name="releaseTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseTime"></a>

```typescript
public readonly releaseTime: string;
```

- *Type:* string

---

##### `releaseType`<sup>Required</sup> <a name="releaseType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseType"></a>

```typescript
public readonly releaseType: string;
```

- *Type:* string

---

##### `securityFix`<sup>Required</sup> <a name="securityFix" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.securityFix"></a>

```typescript
public readonly securityFix: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `supportEndTime`<sup>Required</sup> <a name="supportEndTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.supportEndTime"></a>

```typescript
public readonly supportEndTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties</a>

---



