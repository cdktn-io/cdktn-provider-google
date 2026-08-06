# `discoveryEngineDataStore` Submodule <a name="`discoveryEngineDataStore` Submodule" id="@cdktn/provider-google.discoveryEngineDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataStore <a name="DiscoveryEngineDataStore" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store google_discovery_engine_data_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStore;

DiscoveryEngineDataStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataStoreId(java.lang.String)
    .displayName(java.lang.String)
    .industryVertical(java.lang.String)
    .location(java.lang.String)
//  .aclEnabled(java.lang.Boolean|IResolvable)
//  .advancedSiteSearchConfig(DiscoveryEngineDataStoreAdvancedSiteSearchConfig)
//  .contentConfig(java.lang.String)
//  .createAdvancedSiteSearch(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .documentProcessingConfig(DiscoveryEngineDataStoreDocumentProcessingConfig)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .project(java.lang.String)
//  .skipDefaultSchemaCreation(java.lang.Boolean|IResolvable)
//  .solutionTypes(java.util.List<java.lang.String>)
//  .timeouts(DiscoveryEngineDataStoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dataStoreId">dataStoreId</a></code> | <code>java.lang.String</code> | The unique id of the data store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the data store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.aclEnabled">aclEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Immutable. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.advancedSiteSearchConfig">advancedSiteSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | advanced_site_search_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.contentConfig">contentConfig</a></code> | <code>java.lang.String</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch">createAdvancedSiteSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.documentProcessingConfig">documentProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | document_processing_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | KMS key resource name which will be used to encrypt resources: '/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}' The KMS key to be used to protect this DataStore at creation time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.skipDefaultSchemaCreation">skipDefaultSchemaCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean flag indicating whether to skip the default schema creation for the data store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.solutionTypes">solutionTypes</a></code> | <code>java.util.List<java.lang.String></code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dataStoreId"></a>

- *Type:* java.lang.String

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.industryVertical"></a>

- *Type:* java.lang.String

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}

---

##### `aclEnabled`<sup>Optional</sup> <a name="aclEnabled" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.aclEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Immutable.

Whether data in the DataStore has ACL information. If set to 'true',
the source data must have ACL. ACL will be ingested when data is ingested by
DocumentService.ImportDocuments methods. When ACL is enabled for the DataStore,
Document can't be accessed by calling DocumentService.GetDocument or
DocumentService.ListDocuments. Currently ACL is only supported in the 'GENERIC'
industry vertical with non-'PUBLIC_WEBSITE' content config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#acl_enabled DiscoveryEngineDataStore#acl_enabled}

---

##### `advancedSiteSearchConfig`<sup>Optional</sup> <a name="advancedSiteSearchConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.advancedSiteSearchConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

advanced_site_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#advanced_site_search_config DiscoveryEngineDataStore#advanced_site_search_config}

---

##### `contentConfig`<sup>Optional</sup> <a name="contentConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.contentConfig"></a>

- *Type:* java.lang.String

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}

---

##### `createAdvancedSiteSearch`<sup>Optional</sup> <a name="createAdvancedSiteSearch" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#deletion_policy DiscoveryEngineDataStore#deletion_policy}

---

##### `documentProcessingConfig`<sup>Optional</sup> <a name="documentProcessingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.documentProcessingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

document_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#document_processing_config DiscoveryEngineDataStore#document_processing_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

KMS key resource name which will be used to encrypt resources: '/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}' The KMS key to be used to protect this DataStore at creation time.

Must be
set for requests that need to comply with CMEK Org Policy protections.
If this field is set and processed successfully, the DataStore will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#kms_key_name DiscoveryEngineDataStore#kms_key_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}.

---

##### `skipDefaultSchemaCreation`<sup>Optional</sup> <a name="skipDefaultSchemaCreation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.skipDefaultSchemaCreation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean flag indicating whether to skip the default schema creation for the data store.

Only enable this flag if you are certain that the default
schema is incompatible with your use case.
If set to true, you must manually create a schema for the data store
before any documents can be ingested.
This flag cannot be specified if 'data_store.starting_schema' is
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#skip_default_schema_creation DiscoveryEngineDataStore#skip_default_schema_creation}

---

##### `solutionTypes`<sup>Optional</sup> <a name="solutionTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.solutionTypes"></a>

- *Type:* java.util.List<java.lang.String>

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig">putAdvancedSiteSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig">putDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAclEnabled">resetAclEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAdvancedSiteSearchConfig">resetAdvancedSiteSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetContentConfig">resetContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch">resetCreateAdvancedSiteSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDocumentProcessingConfig">resetDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSkipDefaultSchemaCreation">resetSkipDefaultSchemaCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes">resetSolutionTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedSiteSearchConfig` <a name="putAdvancedSiteSearchConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig"></a>

```java
public void putAdvancedSiteSearchConfig(DiscoveryEngineDataStoreAdvancedSiteSearchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putAdvancedSiteSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---

##### `putDocumentProcessingConfig` <a name="putDocumentProcessingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig"></a>

```java
public void putDocumentProcessingConfig(DiscoveryEngineDataStoreDocumentProcessingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putDocumentProcessingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineDataStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

---

##### `resetAclEnabled` <a name="resetAclEnabled" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAclEnabled"></a>

```java
public void resetAclEnabled()
```

##### `resetAdvancedSiteSearchConfig` <a name="resetAdvancedSiteSearchConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetAdvancedSiteSearchConfig"></a>

```java
public void resetAdvancedSiteSearchConfig()
```

##### `resetContentConfig` <a name="resetContentConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetContentConfig"></a>

```java
public void resetContentConfig()
```

##### `resetCreateAdvancedSiteSearch` <a name="resetCreateAdvancedSiteSearch" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch"></a>

```java
public void resetCreateAdvancedSiteSearch()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDocumentProcessingConfig` <a name="resetDocumentProcessingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetDocumentProcessingConfig"></a>

```java
public void resetDocumentProcessingConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject"></a>

```java
public void resetProject()
```

##### `resetSkipDefaultSchemaCreation` <a name="resetSkipDefaultSchemaCreation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSkipDefaultSchemaCreation"></a>

```java
public void resetSkipDefaultSchemaCreation()
```

##### `resetSolutionTypes` <a name="resetSolutionTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes"></a>

```java
public void resetSolutionTypes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineDataStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStore;

DiscoveryEngineDataStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStore;

DiscoveryEngineDataStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStore;

DiscoveryEngineDataStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStore;

DiscoveryEngineDataStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineDataStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineDataStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineDataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfig">advancedSiteSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference">DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId">defaultSchemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfig">documentProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.aclEnabledInput">aclEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfigInput">advancedSiteSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput">contentConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput">createAdvancedSiteSearchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput">dataStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfigInput">documentProcessingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput">industryVerticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput">skipDefaultSchemaCreationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput">solutionTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.aclEnabled">aclEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig">contentConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch">createAdvancedSiteSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId">dataStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreation">skipDefaultSchemaCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes">solutionTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `advancedSiteSearchConfig`<sup>Required</sup> <a name="advancedSiteSearchConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfig"></a>

```java
public DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference getAdvancedSiteSearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference">DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `defaultSchemaId`<sup>Required</sup> <a name="defaultSchemaId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId"></a>

```java
public java.lang.String getDefaultSchemaId();
```

- *Type:* java.lang.String

---

##### `documentProcessingConfig`<sup>Required</sup> <a name="documentProcessingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference getDocumentProcessingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts"></a>

```java
public DiscoveryEngineDataStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a>

---

##### `aclEnabledInput`<sup>Optional</sup> <a name="aclEnabledInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.aclEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAclEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `advancedSiteSearchConfigInput`<sup>Optional</sup> <a name="advancedSiteSearchConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.advancedSiteSearchConfigInput"></a>

```java
public DiscoveryEngineDataStoreAdvancedSiteSearchConfig getAdvancedSiteSearchConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---

##### `contentConfigInput`<sup>Optional</sup> <a name="contentConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput"></a>

```java
public java.lang.String getContentConfigInput();
```

- *Type:* java.lang.String

---

##### `createAdvancedSiteSearchInput`<sup>Optional</sup> <a name="createAdvancedSiteSearchInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateAdvancedSiteSearchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataStoreIdInput`<sup>Optional</sup> <a name="dataStoreIdInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput"></a>

```java
public java.lang.String getDataStoreIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentProcessingConfigInput`<sup>Optional</sup> <a name="documentProcessingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.documentProcessingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfig getDocumentProcessingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput"></a>

```java
public java.lang.String getIndustryVerticalInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `skipDefaultSchemaCreationInput`<sup>Optional</sup> <a name="skipDefaultSchemaCreationInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipDefaultSchemaCreationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `solutionTypesInput`<sup>Optional</sup> <a name="solutionTypesInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput"></a>

```java
public java.util.List<java.lang.String> getSolutionTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineDataStoreTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

---

##### `aclEnabled`<sup>Required</sup> <a name="aclEnabled" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.aclEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAclEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig"></a>

```java
public java.lang.String getContentConfig();
```

- *Type:* java.lang.String

---

##### `createAdvancedSiteSearch`<sup>Required</sup> <a name="createAdvancedSiteSearch" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch"></a>

```java
public java.lang.Boolean|IResolvable getCreateAdvancedSiteSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId"></a>

```java
public java.lang.String getDataStoreId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `skipDefaultSchemaCreation`<sup>Required</sup> <a name="skipDefaultSchemaCreation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.skipDefaultSchemaCreation"></a>

```java
public java.lang.Boolean|IResolvable getSkipDefaultSchemaCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `solutionTypes`<sup>Required</sup> <a name="solutionTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes"></a>

```java
public java.util.List<java.lang.String> getSolutionTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataStoreAdvancedSiteSearchConfig <a name="DiscoveryEngineDataStoreAdvancedSiteSearchConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreAdvancedSiteSearchConfig;

DiscoveryEngineDataStoreAdvancedSiteSearchConfig.builder()
//  .disableAutomaticRefresh(java.lang.Boolean|IResolvable)
//  .disableInitialIndex(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableAutomaticRefresh">disableAutomaticRefresh</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set true, automatic refresh is disabled for the DataStore. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableInitialIndex">disableInitialIndex</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set true, initial indexing is disabled for the DataStore. |

---

##### `disableAutomaticRefresh`<sup>Optional</sup> <a name="disableAutomaticRefresh" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableAutomaticRefresh"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomaticRefresh();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set true, automatic refresh is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#disable_automatic_refresh DiscoveryEngineDataStore#disable_automatic_refresh}

---

##### `disableInitialIndex`<sup>Optional</sup> <a name="disableInitialIndex" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig.property.disableInitialIndex"></a>

```java
public java.lang.Boolean|IResolvable getDisableInitialIndex();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set true, initial indexing is disabled for the DataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#disable_initial_index DiscoveryEngineDataStore#disable_initial_index}

---

### DiscoveryEngineDataStoreConfig <a name="DiscoveryEngineDataStoreConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreConfig;

DiscoveryEngineDataStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataStoreId(java.lang.String)
    .displayName(java.lang.String)
    .industryVertical(java.lang.String)
    .location(java.lang.String)
//  .aclEnabled(java.lang.Boolean|IResolvable)
//  .advancedSiteSearchConfig(DiscoveryEngineDataStoreAdvancedSiteSearchConfig)
//  .contentConfig(java.lang.String)
//  .createAdvancedSiteSearch(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .documentProcessingConfig(DiscoveryEngineDataStoreDocumentProcessingConfig)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .project(java.lang.String)
//  .skipDefaultSchemaCreation(java.lang.Boolean|IResolvable)
//  .solutionTypes(java.util.List<java.lang.String>)
//  .timeouts(DiscoveryEngineDataStoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId">dataStoreId</a></code> | <code>java.lang.String</code> | The unique id of the data store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the data store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.aclEnabled">aclEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Immutable. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.advancedSiteSearchConfig">advancedSiteSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | advanced_site_search_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig">contentConfig</a></code> | <code>java.lang.String</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch">createAdvancedSiteSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.documentProcessingConfig">documentProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | document_processing_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | KMS key resource name which will be used to encrypt resources: '/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}' The KMS key to be used to protect this DataStore at creation time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation">skipDefaultSchemaCreation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean flag indicating whether to skip the default schema creation for the data store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes">solutionTypes</a></code> | <code>java.util.List<java.lang.String></code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId"></a>

```java
public java.lang.String getDataStoreId();
```

- *Type:* java.lang.String

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}

---

##### `aclEnabled`<sup>Optional</sup> <a name="aclEnabled" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.aclEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAclEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Immutable.

Whether data in the DataStore has ACL information. If set to 'true',
the source data must have ACL. ACL will be ingested when data is ingested by
DocumentService.ImportDocuments methods. When ACL is enabled for the DataStore,
Document can't be accessed by calling DocumentService.GetDocument or
DocumentService.ListDocuments. Currently ACL is only supported in the 'GENERIC'
industry vertical with non-'PUBLIC_WEBSITE' content config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#acl_enabled DiscoveryEngineDataStore#acl_enabled}

---

##### `advancedSiteSearchConfig`<sup>Optional</sup> <a name="advancedSiteSearchConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.advancedSiteSearchConfig"></a>

```java
public DiscoveryEngineDataStoreAdvancedSiteSearchConfig getAdvancedSiteSearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

advanced_site_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#advanced_site_search_config DiscoveryEngineDataStore#advanced_site_search_config}

---

##### `contentConfig`<sup>Optional</sup> <a name="contentConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig"></a>

```java
public java.lang.String getContentConfig();
```

- *Type:* java.lang.String

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}

---

##### `createAdvancedSiteSearch`<sup>Optional</sup> <a name="createAdvancedSiteSearch" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch"></a>

```java
public java.lang.Boolean|IResolvable getCreateAdvancedSiteSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#deletion_policy DiscoveryEngineDataStore#deletion_policy}

---

##### `documentProcessingConfig`<sup>Optional</sup> <a name="documentProcessingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.documentProcessingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfig getDocumentProcessingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

document_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#document_processing_config DiscoveryEngineDataStore#document_processing_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

KMS key resource name which will be used to encrypt resources: '/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{keyId}' The KMS key to be used to protect this DataStore at creation time.

Must be
set for requests that need to comply with CMEK Org Policy protections.
If this field is set and processed successfully, the DataStore will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#kms_key_name DiscoveryEngineDataStore#kms_key_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}.

---

##### `skipDefaultSchemaCreation`<sup>Optional</sup> <a name="skipDefaultSchemaCreation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.skipDefaultSchemaCreation"></a>

```java
public java.lang.Boolean|IResolvable getSkipDefaultSchemaCreation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean flag indicating whether to skip the default schema creation for the data store.

Only enable this flag if you are certain that the default
schema is incompatible with your use case.
If set to true, you must manually create a schema for the data store
before any documents can be ingested.
This flag cannot be specified if 'data_store.starting_schema' is
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#skip_default_schema_creation DiscoveryEngineDataStore#skip_default_schema_creation}

---

##### `solutionTypes`<sup>Optional</sup> <a name="solutionTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes"></a>

```java
public java.util.List<java.lang.String> getSolutionTypes();
```

- *Type:* java.util.List<java.lang.String>

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts"></a>

```java
public DiscoveryEngineDataStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}

---

### DiscoveryEngineDataStoreDocumentProcessingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfig.builder()
//  .chunkingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig)
//  .defaultParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig)
//  .parsingConfigOverrides(IResolvable|java.util.List<DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig">chunkingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | chunking_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig">defaultParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | default_parsing_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides">parsingConfigOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>></code> | parsing_config_overrides block. |

---

##### `chunkingConfig`<sup>Optional</sup> <a name="chunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.chunkingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig getChunkingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#chunking_config DiscoveryEngineDataStore#chunking_config}

---

##### `defaultParsingConfig`<sup>Optional</sup> <a name="defaultParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.defaultParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig getDefaultParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

default_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#default_parsing_config DiscoveryEngineDataStore#default_parsing_config}

---

##### `parsingConfigOverrides`<sup>Optional</sup> <a name="parsingConfigOverrides" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig.property.parsingConfigOverrides"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides> getParsingConfigOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>>

parsing_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#parsing_config_overrides DiscoveryEngineDataStore#parsing_config_overrides}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.builder()
//  .layoutBasedChunkingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig">layoutBasedChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | layout_based_chunking_config block. |

---

##### `layoutBasedChunkingConfig`<sup>Optional</sup> <a name="layoutBasedChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.property.layoutBasedChunkingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig getLayoutBasedChunkingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

layout_based_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#layout_based_chunking_config DiscoveryEngineDataStore#layout_based_chunking_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.builder()
//  .chunkSize(java.lang.Number)
//  .includeAncestorHeadings(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize">chunkSize</a></code> | <code>java.lang.Number</code> | The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings">includeAncestorHeadings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss. |

---

##### `chunkSize`<sup>Optional</sup> <a name="chunkSize" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.chunkSize"></a>

```java
public java.lang.Number getChunkSize();
```

- *Type:* java.lang.Number

The token size limit for each chunk. Supported values: 100-500 (inclusive). Default value: 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#chunk_size DiscoveryEngineDataStore#chunk_size}

---

##### `includeAncestorHeadings`<sup>Optional</sup> <a name="includeAncestorHeadings" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.property.includeAncestorHeadings"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAncestorHeadings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.

Default value: False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#include_ancestor_headings DiscoveryEngineDataStore#include_ancestor_headings}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.builder()
//  .digitalParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig)
//  .layoutParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig)
//  .ocrParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `digitalParsingConfig`<sup>Optional</sup> <a name="digitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.digitalParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig getDigitalParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}

---

##### `layoutParsingConfig`<sup>Optional</sup> <a name="layoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.layoutParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig getLayoutParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocrParsingConfig`<sup>Optional</sup> <a name="ocrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.property.ocrParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig getOcrParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig.builder()
    .build();
```


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.builder()
//  .enableGetProcessedDocument(java.lang.Boolean|IResolvable)
//  .enableImageAnnotation(java.lang.Boolean|IResolvable)
//  .enableLlmLayoutParsing(java.lang.Boolean|IResolvable)
//  .enableTableAnnotation(java.lang.Boolean|IResolvable)
//  .excludeHtmlClasses(java.util.List<java.lang.String>)
//  .excludeHtmlElements(java.util.List<java.lang.String>)
//  .excludeHtmlIds(java.util.List<java.lang.String>)
//  .structuredContentTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableGetProcessedDocument">enableGetProcessedDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the processed document will be made available for the GetProcessedDocument API. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the LLM based annotation is added to the image during parsing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableLlmLayoutParsing">enableLlmLayoutParsing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the pdf layout will be refined using an LLM. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the LLM based annotation is added to the table during parsing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>java.util.List<java.lang.String></code> | List of HTML classes to exclude from the parsed content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>java.util.List<java.lang.String></code> | List of HTML elements to exclude from the parsed content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>java.util.List<java.lang.String></code> | List of HTML ids to exclude from the parsed content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.structuredContentTypes">structuredContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'. |

---

##### `enableGetProcessedDocument`<sup>Optional</sup> <a name="enableGetProcessedDocument" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableGetProcessedDocument"></a>

```java
public java.lang.Boolean|IResolvable getEnableGetProcessedDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the processed document will be made available for the GetProcessedDocument API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_get_processed_document DiscoveryEngineDataStore#enable_get_processed_document}

---

##### `enableImageAnnotation`<sup>Optional</sup> <a name="enableImageAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableImageAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableImageAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the LLM based annotation is added to the image during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_image_annotation DiscoveryEngineDataStore#enable_image_annotation}

---

##### `enableLlmLayoutParsing`<sup>Optional</sup> <a name="enableLlmLayoutParsing" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableLlmLayoutParsing"></a>

```java
public java.lang.Boolean|IResolvable getEnableLlmLayoutParsing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the pdf layout will be refined using an LLM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_llm_layout_parsing DiscoveryEngineDataStore#enable_llm_layout_parsing}

---

##### `enableTableAnnotation`<sup>Optional</sup> <a name="enableTableAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.enableTableAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the LLM based annotation is added to the table during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_table_annotation DiscoveryEngineDataStore#enable_table_annotation}

---

##### `excludeHtmlClasses`<sup>Optional</sup> <a name="excludeHtmlClasses" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlClasses"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlClasses();
```

- *Type:* java.util.List<java.lang.String>

List of HTML classes to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#exclude_html_classes DiscoveryEngineDataStore#exclude_html_classes}

---

##### `excludeHtmlElements`<sup>Optional</sup> <a name="excludeHtmlElements" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlElements"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlElements();
```

- *Type:* java.util.List<java.lang.String>

List of HTML elements to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#exclude_html_elements DiscoveryEngineDataStore#exclude_html_elements}

---

##### `excludeHtmlIds`<sup>Optional</sup> <a name="excludeHtmlIds" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.excludeHtmlIds"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlIds();
```

- *Type:* java.util.List<java.lang.String>

List of HTML ids to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#exclude_html_ids DiscoveryEngineDataStore#exclude_html_ids}

---

##### `structuredContentTypes`<sup>Optional</sup> <a name="structuredContentTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.property.structuredContentTypes"></a>

```java
public java.util.List<java.lang.String> getStructuredContentTypes();
```

- *Type:* java.util.List<java.lang.String>

Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#structured_content_types DiscoveryEngineDataStore#structured_content_types}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.builder()
//  .useNativeText(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText">useNativeText</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `useNativeText`<sup>Optional</sup> <a name="useNativeText" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.property.useNativeText"></a>

```java
public java.lang.Boolean|IResolvable getUseNativeText();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides;

DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.builder()
    .fileType(java.lang.String)
//  .digitalParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig)
//  .layoutParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig)
//  .ocrParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType">fileType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#file_type DiscoveryEngineDataStore#file_type}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | digital_parsing_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | layout_parsing_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | ocr_parsing_config block. |

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#file_type DiscoveryEngineDataStore#file_type}.

---

##### `digitalParsingConfig`<sup>Optional</sup> <a name="digitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.digitalParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig getDigitalParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

digital_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#digital_parsing_config DiscoveryEngineDataStore#digital_parsing_config}

---

##### `layoutParsingConfig`<sup>Optional</sup> <a name="layoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.layoutParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig getLayoutParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

layout_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#layout_parsing_config DiscoveryEngineDataStore#layout_parsing_config}

---

##### `ocrParsingConfig`<sup>Optional</sup> <a name="ocrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.property.ocrParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig getOcrParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

ocr_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#ocr_parsing_config DiscoveryEngineDataStore#ocr_parsing_config}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig.builder()
    .build();
```


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.builder()
//  .enableGetProcessedDocument(java.lang.Boolean|IResolvable)
//  .enableImageAnnotation(java.lang.Boolean|IResolvable)
//  .enableLlmLayoutParsing(java.lang.Boolean|IResolvable)
//  .enableTableAnnotation(java.lang.Boolean|IResolvable)
//  .excludeHtmlClasses(java.util.List<java.lang.String>)
//  .excludeHtmlElements(java.util.List<java.lang.String>)
//  .excludeHtmlIds(java.util.List<java.lang.String>)
//  .structuredContentTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableGetProcessedDocument">enableGetProcessedDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the processed document will be made available for the GetProcessedDocument API. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the LLM based annotation is added to the image during parsing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableLlmLayoutParsing">enableLlmLayoutParsing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the pdf layout will be refined using an LLM. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the LLM based annotation is added to the table during parsing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>java.util.List<java.lang.String></code> | List of HTML classes to exclude from the parsed content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>java.util.List<java.lang.String></code> | List of HTML elements to exclude from the parsed content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>java.util.List<java.lang.String></code> | List of HTML ids to exclude from the parsed content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.structuredContentTypes">structuredContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'. |

---

##### `enableGetProcessedDocument`<sup>Optional</sup> <a name="enableGetProcessedDocument" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableGetProcessedDocument"></a>

```java
public java.lang.Boolean|IResolvable getEnableGetProcessedDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the processed document will be made available for the GetProcessedDocument API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_get_processed_document DiscoveryEngineDataStore#enable_get_processed_document}

---

##### `enableImageAnnotation`<sup>Optional</sup> <a name="enableImageAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableImageAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableImageAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the LLM based annotation is added to the image during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_image_annotation DiscoveryEngineDataStore#enable_image_annotation}

---

##### `enableLlmLayoutParsing`<sup>Optional</sup> <a name="enableLlmLayoutParsing" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableLlmLayoutParsing"></a>

```java
public java.lang.Boolean|IResolvable getEnableLlmLayoutParsing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the pdf layout will be refined using an LLM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_llm_layout_parsing DiscoveryEngineDataStore#enable_llm_layout_parsing}

---

##### `enableTableAnnotation`<sup>Optional</sup> <a name="enableTableAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.enableTableAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the LLM based annotation is added to the table during parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#enable_table_annotation DiscoveryEngineDataStore#enable_table_annotation}

---

##### `excludeHtmlClasses`<sup>Optional</sup> <a name="excludeHtmlClasses" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlClasses"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlClasses();
```

- *Type:* java.util.List<java.lang.String>

List of HTML classes to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#exclude_html_classes DiscoveryEngineDataStore#exclude_html_classes}

---

##### `excludeHtmlElements`<sup>Optional</sup> <a name="excludeHtmlElements" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlElements"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlElements();
```

- *Type:* java.util.List<java.lang.String>

List of HTML elements to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#exclude_html_elements DiscoveryEngineDataStore#exclude_html_elements}

---

##### `excludeHtmlIds`<sup>Optional</sup> <a name="excludeHtmlIds" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.excludeHtmlIds"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlIds();
```

- *Type:* java.util.List<java.lang.String>

List of HTML ids to exclude from the parsed content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#exclude_html_ids DiscoveryEngineDataStore#exclude_html_ids}

---

##### `structuredContentTypes`<sup>Optional</sup> <a name="structuredContentTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.property.structuredContentTypes"></a>

```java
public java.util.List<java.lang.String> getStructuredContentTypes();
```

- *Type:* java.util.List<java.lang.String>

Contains the required structure types to extract from the document. Supported values: 'shareholder-structure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#structured_content_types DiscoveryEngineDataStore#structured_content_types}

---

### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;

DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.builder()
//  .useNativeText(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText">useNativeText</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, will use native text instead of OCR text on pages containing native text. |

---

##### `useNativeText`<sup>Optional</sup> <a name="useNativeText" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.property.useNativeText"></a>

```java
public java.lang.Boolean|IResolvable getUseNativeText();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, will use native text instead of OCR text on pages containing native text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#use_native_text DiscoveryEngineDataStore#use_native_text}

---

### DiscoveryEngineDataStoreTimeouts <a name="DiscoveryEngineDataStoreTimeouts" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreTimeouts;

DiscoveryEngineDataStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference <a name="DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference;

new DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableAutomaticRefresh">resetDisableAutomaticRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableInitialIndex">resetDisableInitialIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableAutomaticRefresh` <a name="resetDisableAutomaticRefresh" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableAutomaticRefresh"></a>

```java
public void resetDisableAutomaticRefresh()
```

##### `resetDisableInitialIndex` <a name="resetDisableInitialIndex" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resetDisableInitialIndex"></a>

```java
public void resetDisableInitialIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefreshInput">disableAutomaticRefreshInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndexInput">disableInitialIndexInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh">disableAutomaticRefresh</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex">disableInitialIndex</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableAutomaticRefreshInput`<sup>Optional</sup> <a name="disableAutomaticRefreshInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefreshInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomaticRefreshInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableInitialIndexInput`<sup>Optional</sup> <a name="disableInitialIndexInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndexInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableInitialIndexInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableAutomaticRefresh`<sup>Required</sup> <a name="disableAutomaticRefresh" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomaticRefresh();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableInitialIndex`<sup>Required</sup> <a name="disableInitialIndex" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex"></a>

```java
public java.lang.Boolean|IResolvable getDisableInitialIndex();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreAdvancedSiteSearchConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreAdvancedSiteSearchConfig">DiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize">resetChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings">resetIncludeAncestorHeadings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChunkSize` <a name="resetChunkSize" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetChunkSize"></a>

```java
public void resetChunkSize()
```

##### `resetIncludeAncestorHeadings` <a name="resetIncludeAncestorHeadings" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resetIncludeAncestorHeadings"></a>

```java
public void resetIncludeAncestorHeadings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput">chunkSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput">includeAncestorHeadingsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize">chunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings">includeAncestorHeadings</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chunkSizeInput`<sup>Optional</sup> <a name="chunkSizeInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSizeInput"></a>

```java
public java.lang.Number getChunkSizeInput();
```

- *Type:* java.lang.Number

---

##### `includeAncestorHeadingsInput`<sup>Optional</sup> <a name="includeAncestorHeadingsInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadingsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAncestorHeadingsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize"></a>

```java
public java.lang.Number getChunkSize();
```

- *Type:* java.lang.Number

---

##### `includeAncestorHeadings`<sup>Required</sup> <a name="includeAncestorHeadings" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAncestorHeadings();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig">putLayoutBasedChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig">resetLayoutBasedChunkingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayoutBasedChunkingConfig` <a name="putLayoutBasedChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig"></a>

```java
public void putLayoutBasedChunkingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.putLayoutBasedChunkingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---

##### `resetLayoutBasedChunkingConfig` <a name="resetLayoutBasedChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resetLayoutBasedChunkingConfig"></a>

```java
public void resetLayoutBasedChunkingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig">layoutBasedChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput">layoutBasedChunkingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layoutBasedChunkingConfig`<sup>Required</sup> <a name="layoutBasedChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference getLayoutBasedChunkingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference</a>

---

##### `layoutBasedChunkingConfigInput`<sup>Optional</sup> <a name="layoutBasedChunkingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig getLayoutBasedChunkingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableGetProcessedDocument">resetEnableGetProcessedDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableImageAnnotation">resetEnableImageAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableLlmLayoutParsing">resetEnableLlmLayoutParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableTableAnnotation">resetEnableTableAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlClasses">resetExcludeHtmlClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlElements">resetExcludeHtmlElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlIds">resetExcludeHtmlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetStructuredContentTypes">resetStructuredContentTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableGetProcessedDocument` <a name="resetEnableGetProcessedDocument" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableGetProcessedDocument"></a>

```java
public void resetEnableGetProcessedDocument()
```

##### `resetEnableImageAnnotation` <a name="resetEnableImageAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableImageAnnotation"></a>

```java
public void resetEnableImageAnnotation()
```

##### `resetEnableLlmLayoutParsing` <a name="resetEnableLlmLayoutParsing" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableLlmLayoutParsing"></a>

```java
public void resetEnableLlmLayoutParsing()
```

##### `resetEnableTableAnnotation` <a name="resetEnableTableAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetEnableTableAnnotation"></a>

```java
public void resetEnableTableAnnotation()
```

##### `resetExcludeHtmlClasses` <a name="resetExcludeHtmlClasses" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlClasses"></a>

```java
public void resetExcludeHtmlClasses()
```

##### `resetExcludeHtmlElements` <a name="resetExcludeHtmlElements" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlElements"></a>

```java
public void resetExcludeHtmlElements()
```

##### `resetExcludeHtmlIds` <a name="resetExcludeHtmlIds" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetExcludeHtmlIds"></a>

```java
public void resetExcludeHtmlIds()
```

##### `resetStructuredContentTypes` <a name="resetStructuredContentTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resetStructuredContentTypes"></a>

```java
public void resetStructuredContentTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableGetProcessedDocumentInput">enableGetProcessedDocumentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotationInput">enableImageAnnotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableLlmLayoutParsingInput">enableLlmLayoutParsingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotationInput">enableTableAnnotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput">excludeHtmlClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput">excludeHtmlElementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput">excludeHtmlIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypesInput">structuredContentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableGetProcessedDocument">enableGetProcessedDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableLlmLayoutParsing">enableLlmLayoutParsing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypes">structuredContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableGetProcessedDocumentInput`<sup>Optional</sup> <a name="enableGetProcessedDocumentInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableGetProcessedDocumentInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableGetProcessedDocumentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableImageAnnotationInput`<sup>Optional</sup> <a name="enableImageAnnotationInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableImageAnnotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLlmLayoutParsingInput`<sup>Optional</sup> <a name="enableLlmLayoutParsingInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableLlmLayoutParsingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableLlmLayoutParsingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableTableAnnotationInput`<sup>Optional</sup> <a name="enableTableAnnotationInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableAnnotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeHtmlClassesInput`<sup>Optional</sup> <a name="excludeHtmlClassesInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlElementsInput`<sup>Optional</sup> <a name="excludeHtmlElementsInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlElementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlIdsInput`<sup>Optional</sup> <a name="excludeHtmlIdsInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `structuredContentTypesInput`<sup>Optional</sup> <a name="structuredContentTypesInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypesInput"></a>

```java
public java.util.List<java.lang.String> getStructuredContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableGetProcessedDocument`<sup>Required</sup> <a name="enableGetProcessedDocument" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableGetProcessedDocument"></a>

```java
public java.lang.Boolean|IResolvable getEnableGetProcessedDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableImageAnnotation`<sup>Required</sup> <a name="enableImageAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableImageAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLlmLayoutParsing`<sup>Required</sup> <a name="enableLlmLayoutParsing" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableLlmLayoutParsing"></a>

```java
public java.lang.Boolean|IResolvable getEnableLlmLayoutParsing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableTableAnnotation`<sup>Required</sup> <a name="enableTableAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeHtmlClasses`<sup>Required</sup> <a name="excludeHtmlClasses" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClasses"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlElements`<sup>Required</sup> <a name="excludeHtmlElements" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElements"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlElements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlIds`<sup>Required</sup> <a name="excludeHtmlIds" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIds"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `structuredContentTypes`<sup>Required</sup> <a name="structuredContentTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypes"></a>

```java
public java.util.List<java.lang.String> getStructuredContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText">resetUseNativeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseNativeText` <a name="resetUseNativeText" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resetUseNativeText"></a>

```java
public void resetUseNativeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput">useNativeTextInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText">useNativeText</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useNativeTextInput`<sup>Optional</sup> <a name="useNativeTextInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```java
public java.lang.Boolean|IResolvable getUseNativeTextInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useNativeText`<sup>Required</sup> <a name="useNativeText" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText"></a>

```java
public java.lang.Boolean|IResolvable getUseNativeText();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig">putDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig">putLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig">putOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig">resetDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig">resetLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig">resetOcrParsingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDigitalParsingConfig` <a name="putDigitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig"></a>

```java
public void putDigitalParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putDigitalParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---

##### `putLayoutParsingConfig` <a name="putLayoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig"></a>

```java
public void putLayoutParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putLayoutParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---

##### `putOcrParsingConfig` <a name="putOcrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig"></a>

```java
public void putOcrParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.putOcrParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---

##### `resetDigitalParsingConfig` <a name="resetDigitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetDigitalParsingConfig"></a>

```java
public void resetDigitalParsingConfig()
```

##### `resetLayoutParsingConfig` <a name="resetLayoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetLayoutParsingConfig"></a>

```java
public void resetLayoutParsingConfig()
```

##### `resetOcrParsingConfig` <a name="resetOcrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resetOcrParsingConfig"></a>

```java
public void resetOcrParsingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput">digitalParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput">layoutParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput">ocrParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `digitalParsingConfig`<sup>Required</sup> <a name="digitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference getDigitalParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference</a>

---

##### `layoutParsingConfig`<sup>Required</sup> <a name="layoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference getLayoutParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference</a>

---

##### `ocrParsingConfig`<sup>Required</sup> <a name="ocrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference getOcrParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference</a>

---

##### `digitalParsingConfigInput`<sup>Optional</sup> <a name="digitalParsingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig getDigitalParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---

##### `layoutParsingConfigInput`<sup>Optional</sup> <a name="layoutParsingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig getLayoutParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---

##### `ocrParsingConfigInput`<sup>Optional</sup> <a name="ocrParsingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig getOcrParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig">putChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig">putDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides">putParsingConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig">resetChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig">resetDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides">resetParsingConfigOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChunkingConfig` <a name="putChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig"></a>

```java
public void putChunkingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putChunkingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---

##### `putDefaultParsingConfig` <a name="putDefaultParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig"></a>

```java
public void putDefaultParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putDefaultParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---

##### `putParsingConfigOverrides` <a name="putParsingConfigOverrides" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides"></a>

```java
public void putParsingConfigOverrides(IResolvable|java.util.List<DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.putParsingConfigOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>>

---

##### `resetChunkingConfig` <a name="resetChunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetChunkingConfig"></a>

```java
public void resetChunkingConfig()
```

##### `resetDefaultParsingConfig` <a name="resetDefaultParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetDefaultParsingConfig"></a>

```java
public void resetDefaultParsingConfig()
```

##### `resetParsingConfigOverrides` <a name="resetParsingConfigOverrides" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resetParsingConfigOverrides"></a>

```java
public void resetParsingConfigOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig">chunkingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig">defaultParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides">parsingConfigOverrides</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput">chunkingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput">defaultParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput">parsingConfigOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chunkingConfig`<sup>Required</sup> <a name="chunkingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference getChunkingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference</a>

---

##### `defaultParsingConfig`<sup>Required</sup> <a name="defaultParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference getDefaultParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parsingConfigOverrides`<sup>Required</sup> <a name="parsingConfigOverrides" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList getParsingConfigOverrides();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a>

---

##### `chunkingConfigInput`<sup>Optional</sup> <a name="chunkingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig getChunkingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---

##### `defaultParsingConfigInput`<sup>Optional</sup> <a name="defaultParsingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig getDefaultParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---

##### `parsingConfigOverridesInput`<sup>Optional</sup> <a name="parsingConfigOverridesInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverridesInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides> getParsingConfigOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfig">DiscoveryEngineDataStoreDocumentProcessingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableGetProcessedDocument">resetEnableGetProcessedDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableImageAnnotation">resetEnableImageAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableLlmLayoutParsing">resetEnableLlmLayoutParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableTableAnnotation">resetEnableTableAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlClasses">resetExcludeHtmlClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlElements">resetExcludeHtmlElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlIds">resetExcludeHtmlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetStructuredContentTypes">resetStructuredContentTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableGetProcessedDocument` <a name="resetEnableGetProcessedDocument" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableGetProcessedDocument"></a>

```java
public void resetEnableGetProcessedDocument()
```

##### `resetEnableImageAnnotation` <a name="resetEnableImageAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableImageAnnotation"></a>

```java
public void resetEnableImageAnnotation()
```

##### `resetEnableLlmLayoutParsing` <a name="resetEnableLlmLayoutParsing" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableLlmLayoutParsing"></a>

```java
public void resetEnableLlmLayoutParsing()
```

##### `resetEnableTableAnnotation` <a name="resetEnableTableAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetEnableTableAnnotation"></a>

```java
public void resetEnableTableAnnotation()
```

##### `resetExcludeHtmlClasses` <a name="resetExcludeHtmlClasses" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlClasses"></a>

```java
public void resetExcludeHtmlClasses()
```

##### `resetExcludeHtmlElements` <a name="resetExcludeHtmlElements" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlElements"></a>

```java
public void resetExcludeHtmlElements()
```

##### `resetExcludeHtmlIds` <a name="resetExcludeHtmlIds" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetExcludeHtmlIds"></a>

```java
public void resetExcludeHtmlIds()
```

##### `resetStructuredContentTypes` <a name="resetStructuredContentTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resetStructuredContentTypes"></a>

```java
public void resetStructuredContentTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableGetProcessedDocumentInput">enableGetProcessedDocumentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotationInput">enableImageAnnotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableLlmLayoutParsingInput">enableLlmLayoutParsingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotationInput">enableTableAnnotationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput">excludeHtmlClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput">excludeHtmlElementsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput">excludeHtmlIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypesInput">structuredContentTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableGetProcessedDocument">enableGetProcessedDocument</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableLlmLayoutParsing">enableLlmLayoutParsing</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypes">structuredContentTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableGetProcessedDocumentInput`<sup>Optional</sup> <a name="enableGetProcessedDocumentInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableGetProcessedDocumentInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableGetProcessedDocumentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableImageAnnotationInput`<sup>Optional</sup> <a name="enableImageAnnotationInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableImageAnnotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLlmLayoutParsingInput`<sup>Optional</sup> <a name="enableLlmLayoutParsingInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableLlmLayoutParsingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableLlmLayoutParsingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableTableAnnotationInput`<sup>Optional</sup> <a name="enableTableAnnotationInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableAnnotationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeHtmlClassesInput`<sup>Optional</sup> <a name="excludeHtmlClassesInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClassesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlElementsInput`<sup>Optional</sup> <a name="excludeHtmlElementsInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElementsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlElementsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlIdsInput`<sup>Optional</sup> <a name="excludeHtmlIdsInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIdsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `structuredContentTypesInput`<sup>Optional</sup> <a name="structuredContentTypesInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypesInput"></a>

```java
public java.util.List<java.lang.String> getStructuredContentTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableGetProcessedDocument`<sup>Required</sup> <a name="enableGetProcessedDocument" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableGetProcessedDocument"></a>

```java
public java.lang.Boolean|IResolvable getEnableGetProcessedDocument();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableImageAnnotation`<sup>Required</sup> <a name="enableImageAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableImageAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLlmLayoutParsing`<sup>Required</sup> <a name="enableLlmLayoutParsing" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableLlmLayoutParsing"></a>

```java
public java.lang.Boolean|IResolvable getEnableLlmLayoutParsing();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableTableAnnotation`<sup>Required</sup> <a name="enableTableAnnotation" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTableAnnotation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeHtmlClasses`<sup>Required</sup> <a name="excludeHtmlClasses" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClasses"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlElements`<sup>Required</sup> <a name="excludeHtmlElements" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElements"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlElements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHtmlIds`<sup>Required</sup> <a name="excludeHtmlIds" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIds"></a>

```java
public java.util.List<java.lang.String> getExcludeHtmlIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `structuredContentTypes`<sup>Required</sup> <a name="structuredContentTypes" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypes"></a>

```java
public java.util.List<java.lang.String> getStructuredContentTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList;

new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText">resetUseNativeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseNativeText` <a name="resetUseNativeText" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resetUseNativeText"></a>

```java
public void resetUseNativeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput">useNativeTextInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText">useNativeText</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useNativeTextInput`<sup>Optional</sup> <a name="useNativeTextInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeTextInput"></a>

```java
public java.lang.Boolean|IResolvable getUseNativeTextInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useNativeText`<sup>Required</sup> <a name="useNativeText" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText"></a>

```java
public java.lang.Boolean|IResolvable getUseNativeText();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---


### DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference <a name="DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference;

new DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig">putDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig">putLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig">putOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig">resetDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig">resetLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig">resetOcrParsingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDigitalParsingConfig` <a name="putDigitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig"></a>

```java
public void putDigitalParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putDigitalParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---

##### `putLayoutParsingConfig` <a name="putLayoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig"></a>

```java
public void putLayoutParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putLayoutParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---

##### `putOcrParsingConfig` <a name="putOcrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig"></a>

```java
public void putOcrParsingConfig(DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.putOcrParsingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---

##### `resetDigitalParsingConfig` <a name="resetDigitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetDigitalParsingConfig"></a>

```java
public void resetDigitalParsingConfig()
```

##### `resetLayoutParsingConfig` <a name="resetLayoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetLayoutParsingConfig"></a>

```java
public void resetLayoutParsingConfig()
```

##### `resetOcrParsingConfig` <a name="resetOcrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resetOcrParsingConfig"></a>

```java
public void resetOcrParsingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput">digitalParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput">layoutParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput">ocrParsingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType">fileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `digitalParsingConfig`<sup>Required</sup> <a name="digitalParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference getDigitalParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference</a>

---

##### `layoutParsingConfig`<sup>Required</sup> <a name="layoutParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference getLayoutParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference</a>

---

##### `ocrParsingConfig`<sup>Required</sup> <a name="ocrParsingConfig" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference getOcrParsingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference</a>

---

##### `digitalParsingConfigInput`<sup>Optional</sup> <a name="digitalParsingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig getDigitalParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileTypeInput"></a>

```java
public java.lang.String getFileTypeInput();
```

- *Type:* java.lang.String

---

##### `layoutParsingConfigInput`<sup>Optional</sup> <a name="layoutParsingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig getLayoutParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---

##### `ocrParsingConfigInput`<sup>Optional</sup> <a name="ocrParsingConfigInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfigInput"></a>

```java
public DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig getOcrParsingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>

---


### DiscoveryEngineDataStoreTimeoutsOutputReference <a name="DiscoveryEngineDataStoreTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_store.DiscoveryEngineDataStoreTimeoutsOutputReference;

new DiscoveryEngineDataStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineDataStoreTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

---



