# `dataGoogleStorageControlFolderIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlFolderIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlFolderIntelligenceFindingsSummary <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummary" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary google_storage_control_folder_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

new dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary(scope: Construct, id: string, config: DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig">DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig">DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetResourceScope">resetResourceScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetResourceScope` <a name="resetResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.resetResourceScope"></a>

```typescript
public resetResourceScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlFolderIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleStorageControlFolderIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlFolderIntelligenceFindingsSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlFolderIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlFolderIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.findingSummaries">findingSummaries</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScopeInput">resourceScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScope">resourceScope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `findingSummaries`<sup>Required</sup> <a name="findingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.findingSummaries"></a>

```typescript
public readonly findingSummaries: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `resourceScopeInput`<sup>Optional</sup> <a name="resourceScopeInput" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```typescript
public readonly resourceScopeInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceScope`<sup>Required</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.resourceScope"></a>

```typescript
public readonly resourceScope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

const dataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig: dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.folder">folder</a></code> | <code>string</code> | The ID of the Google Cloud Folder. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.filter">filter</a></code> | <code>string</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#id DataGoogleStorageControlFolderIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.location">location</a></code> | <code>string</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.resourceScope">resourceScope</a></code> | <code>string</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The ID of the Google Cloud Folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#folder DataGoogleStorageControlFolderIntelligenceFindingsSummary#folder}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#filter DataGoogleStorageControlFolderIntelligenceFindingsSummary#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#id DataGoogleStorageControlFolderIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#location DataGoogleStorageControlFolderIntelligenceFindingsSummary#location}

---

##### `resourceScope`<sup>Optional</sup> <a name="resourceScope" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```typescript
public readonly resourceScope: string;
```

- *Type:* string

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#resource_scope DataGoogleStorageControlFolderIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

const dataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries: dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries = { ... }
```


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

const dataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails: dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

new dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

new dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">summaryDetails</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">targetResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `summaryDetails`<sup>Required</sup> <a name="summaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```typescript
public readonly summaryDetails: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```typescript
public readonly targetResource: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

new dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlFolderIntelligenceFindingsSummary } from '@cdktn/provider-google'

new dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlFolderIntelligenceFindingsSummary.DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---



